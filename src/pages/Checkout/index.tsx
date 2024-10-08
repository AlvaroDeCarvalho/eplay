// Este componente Checkout lida com a lógica de compra, incluindo a seleção do método de pagamento
// (cartão de crédito ou boleto bancário), cálculo de parcelas, e validação do formulário usando Formik e Yup.

// - Imports:
//   - React hooks: useEffect, useState
//   - Formik para gerenciamento de formulários
//   - Redux para acessar o estado global
//   - Components (Button, Card) e estilos

// - Estado Local:
//   - `payWithCard`: controla se o pagamento será feito com cartão de crédito
//   - `installment`: armazena as opções de parcelas
//   - `purchase`: função de mutação para processar a compra

// - useEffect:
//   - Calcula as parcelas possíveis com base no total do carrinho e formata os valores.

// - Formik:
//   - Inicializa o formulário com campos para dados pessoais, de entrega e de pagamento.
//   - Valida os campos usando Yup, aplicando regras específicas, especialmente para os campos obrigatórios
//     quando o pagamento é com cartão de crédito.

// - Função `getErrorMensage`:
//   - Retorna mensagens de erro baseadas na validação do Formik.

// - Renderização Condicional:
//   - Mostra um resumo da compra em caso de sucesso ou o formulário de pagamento para preenchimento e envio.

// - Formulário:
//   - Os campos de entrada estão ligados aos valores gerenciados pelo Formik (`form.values`).
//   - As mudanças e eventos de desfoque são gerenciados pelos métodos `handleChange` e `handleBlur` do Formik.
//   - Campos específicos para pagamento com cartão de crédito são exibidos condicionalmente com base no estado `payWithCard`.
//   - A função `onSubmit` do Formik chama a mutação `purchase` para enviar os dados de compra.

// - Mensagem de Sucesso:
//   - Após a compra ser concluída, exibe um resumo da compra e instruções adicionais.


import { useEffect, useState } from 'react'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'
import { Navigate } from 'react-router-dom'
import InputMask from 'react-input-mask'

import Button from '../../components/Button'
import Card from '../../components/Card'

import * as S from './styles'
import { clean } from '../../store/reducers/cart'

import { usePurchaseMutation } from '../../services/api'

import barCode from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

import * as Yup from 'yup'
import { formatPrice, getTotalPrice } from '../../utils'

type Installment = {
  quantily: number
  amount: number
  amountFormated: string
}

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)
  const [purchase, { data, isSuccess, isLoading }] = usePurchaseMutation()
  const { items } = useSelector((state: RootReducer) => state.cart)
  const [installment, setInstallment] = useState<Installment[]>([])
  const dispatch = useDispatch()

  const totalPrice = getTotalPrice(items)
  useEffect(() => {
    const calculatorInstallments = () => {
      const installmentArray: Installment[] = []

      for (let i = 1; i < 6; i++) {
        installmentArray.push({
          quantily: i,
          amount: totalPrice / i,
          amountFormated: formatPrice(totalPrice / i)
        })
      }
      return installmentArray
    }
    if (totalPrice) {
      setInstallment(calculatorInstallments())
    }
  }, [totalPrice])

  useEffect(() => {
    if (isSuccess) {
      dispatch(clean())
    }
  }, [isSuccess, dispatch])

  const form = useFormik({
    initialValues: {
      fullName: '',
      email: '',
      cpf: '',
      deliveryEmail: '',
      confirmEmail: '',
      cardOwner: '',
      cpfCardOwner: '',
      cardDisplayName: '',
      cardNumber: '',
      expiresMonth: '',
      expiresYear: '',
      cvv: '',
      installments: 1
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, 'Nome completo inválido')
        .required('O Nome completo é obrigatório'),
      email: Yup.string()
        .email('Email inválido')
        .required('O Email é obrigatório'),
      cpf: Yup.string()
        .min(14, 'cpf invalido')
        .max(14, 'cpf invalido')
        .required('O CPF é obrigatório'),
      deliveryEmail: Yup.string()
        .email('Email inválido')
        .required('O Email é obrigatório'),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref('deliveryEmail')], 'os emails não são iguais')
        .required('O Email é obrigatório'),

      cardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cpfCardOwner: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardNumber: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cardDisplayName: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresMonth: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      expiresYear: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      cvv: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      ),
      installments: Yup.number().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: values.installments,
          card: {
            active: payWithCard,
            code: Number(values.cvv),
            name: values.cardDisplayName,
            number: values.cardNumber,
            owner: {
              document: values.cpfCardOwner,
              name: values.cardOwner
            },
            expires: {
              year: Number(values.expiresYear),
              month: Number(values.expiresMonth)
            }
          }
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices?.current as number
        }))
      })
    }
  })
  const getErrorMensage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isInvelid = field in form.errors
    if (isTouched && isInvelid) {
      return message
    }
    if (items.length === 0 && !isSuccess) {
      return <Navigate to="/" />
    }
    return ''
  }
  console.log(form)
  return (
    <div className="container">
      {isSuccess ? (
        <Card title="Muito obrigado">
          <>
            <p>
              É com satisfação que informamos que recebemos seu pedido com
              sucesso! <br />
              Abaixo estão os detalhes da sua compra: <br />
              Número do pedido:{' '}
              {data ? (data.orderId !== undefined ? data.orderId : '') : ''}
              <br /> Forma de pagamento
              {payWithCard ? 'Cartão de crédito' : 'Boleto bancário'}
            </p>
            <p className="margin-top">
              Caso tenha optado pelo pagamento via boleto bancário, lembre-se de
              que a confirmação pode levar até 3 dias úteis. <br />
              Após a aprovação do pagamento, enviaremos um e-mail contendo o
              código de ativação do jogo.
            </p>
            <p className="margin-top">
              e você optou pelo pagamento com cartão de crédito, a liberação do
              código de ativação ocorrerá após a aprovação da transação pela
              operadora do cartão. Você receberá o código no e-mail cadastrado
              em nossa loja.
            </p>
            <p className="margin-top">
              Pedimos que verifique sua caixa de entrada e a pasta de spam para
              garantir que receba nossa comunicação. <br /> Caso tenha alguma
              dúvida ou necessite de mais informações, por favor, entre em
              contato conosco através dos nossos canais de atendimento ao
              cliente.
            </p>
            <p className="margin-top">
              Agradecemos por escolher a EPLAY e esperamos que desfrute do seu
              jogo!
            </p>
          </>
        </Card>
      ) : (
        <form onSubmit={form.handleSubmit}>
          <Card title="Dados de cobrança">
            <>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="fullName">Nome completo</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={form.values.fullName}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMensage('fullName', form.errors.fullName)}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    value={form.values.email}
                  />
                  <small>{getErrorMensage('email', form.errors.email)}</small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="cpf">CPF</label>
                  <InputMask
                    type="text"
                    id="cpf"
                    name="cpf"
                    value={form.values.cpf}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                    mask={'999.999.999-99'}
                  />
                  <small>{getErrorMensage('cpf', form.errors.cpf)}</small>
                </S.InputGroup>
              </S.Row>
              <h3 className="margin-top">
                Dados de entrega - conteúdo digital
              </h3>
              <S.Row>
                <S.InputGroup>
                  <label htmlFor="deliveryEmail">Email</label>
                  <input
                    type="email"
                    id="deliveryEmail"
                    name="deliveryEmail"
                    value={form.values.deliveryEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMensage(
                      'deliveryEmail',
                      form.errors.deliveryEmail
                    )}
                  </small>
                </S.InputGroup>
                <S.InputGroup>
                  <label htmlFor="confirmEmail">Confirme o email</label>
                  <input
                    type="email"
                    id="confirmEmail"
                    name="confirmEmail"
                    value={form.values.confirmEmail}
                    onChange={form.handleChange}
                    onBlur={form.handleBlur}
                  />
                  <small>
                    {getErrorMensage('confirmEmail', form.errors.confirmEmail)}
                  </small>
                </S.InputGroup>
              </S.Row>
            </>
          </Card>
          <Card title="Pagamento">
            <>
              <div>
                <S.TabButton
                  active={!payWithCard}
                  onClick={() => setPayWithCard(false)}
                  type="button"
                >
                  <img src={barCode} alt="" />
                  Boleto bancário
                </S.TabButton>
                <S.TabButton
                  active={payWithCard}
                  onClick={() => setPayWithCard(true)}
                  type="button"
                >
                  <img src={cartao} alt="" />
                  Cartão de crédito
                </S.TabButton>
                {payWithCard ? (
                  <>
                    <S.Row>
                      <S.InputGroup>
                        <label htmlFor="cardOwner">
                          Nome do titular do cartão
                        </label>
                        <input
                          type="text"
                          id="cardOwner"
                          name="cardOwner"
                          value={form.values.cardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMensage('cardOwner', form.errors.cardOwner)}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cpfCardOwner">CPF</label>
                        <InputMask
                          type="text"
                          id="cpfCardOwner"
                          name="cpfCardOwner"
                          value={form.values.cpfCardOwner}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask={'999.999.999-99'}
                        />
                        <small>
                          {getErrorMensage(
                            'cpfCardOwner',
                            form.errors.cpfCardOwner
                          )}
                        </small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup>
                        <label htmlFor="cardDisplayName">Nome do cartão</label>
                        <InputMask
                          type="text"
                          id="cardDisplayName"
                          name="cardDisplayName"
                          value={form.values.cardDisplayName}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                          mask={'9999 9999 9999 9999'}
                        />
                        <small>
                          {getErrorMensage(
                            'cardDisplayName',
                            form.errors.cardDisplayName
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="cardNumber">Número do cartão</label>
                        <input
                          type="text"
                          id="cardNumber"
                          name="cardNumber"
                          value={form.values.cardNumber}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMensage(
                            'cardNumber',
                            form.errors.cardNumber
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="123px">
                        <label htmlFor="expiresMonth">Mês de vencimento</label>
                        <input
                          type="text"
                          id="expiresMonth"
                          name="expiresMonth"
                          value={form.values.expiresMonth}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <br />
                        <small>
                          {getErrorMensage(
                            'expiresMonth',
                            form.errors.expiresMonth
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup>
                        <label htmlFor="expiresYear">Ano de vencimento</label>
                        <input
                          type="text"
                          id="expiresYear"
                          name="expiresYear"
                          value={form.values.expiresYear}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <small>
                          {getErrorMensage(
                            'expiresYear',
                            form.errors.expiresYear
                          )}
                        </small>
                      </S.InputGroup>
                      <S.InputGroup maxWidth="48px">
                        <label htmlFor="cvv">CVV</label>
                        <input
                          type="text"
                          id="cvv"
                          name="cvv"
                          value={form.values.cvv}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        />
                        <br />
                        <small>{getErrorMensage('cvv', form.errors.cvv)}</small>
                      </S.InputGroup>
                    </S.Row>
                    <S.Row marginTop="24px">
                      <S.InputGroup maxWidth="150px">
                        <label htmlFor="installments">Parcelas</label>
                        <select
                          name="installments"
                          id="installments"
                          value={form.values.installments}
                          onChange={form.handleChange}
                          onBlur={form.handleBlur}
                        >
                          {installment.map((item) => (
                            <option value={item.quantily} key={item.amount}>
                              {item.quantily}x de {item.amountFormated}{' '}
                            </option>
                          ))}
                        </select>
                      </S.InputGroup>
                    </S.Row>
                  </>
                ) : (
                  <p>
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pelas instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação do pagamento do
                    boleto
                  </p>
                )}
              </div>
            </>
          </Card>
          <Button
            type="submit"
            onClick={form.handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? 'Finalizando compra...' : 'Finalizar compra'}
          </Button>
        </form>
      )}
    </div>
  )
}

export default Checkout
