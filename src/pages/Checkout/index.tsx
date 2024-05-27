import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { usePurchaseMutation } from '../../services/api'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  const [purchase, { isLoading, isError, data }] = usePurchaseMutation()

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
      installments: '1'
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
      installments: Yup.string().when((values, schema) =>
        payWithCard ? schema.required('O campo é obrigatório') : schema
      )
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          name: values.fullName,
          email: values.email,
          document: values.cpf
        },
        delivery: {
          email: values.deliveryEmail
        },
        payment: {
          installments: 1,
          card: {
            name: values.cardDisplayName,
            code: Number(values.cvv),
            active: payWithCard,
            owner: {
              name: values.cardOwner,
              document: values.cpfCardOwner
            },
            expires: {
              month: 1,
              year: 2024
            }
          }
        },
        products: [{ id: 1, price: 100 }]
      })
    }
  })
  const getErrorMensage = (field: string, message?: string) => {
    const isTouched = field in form.touched
    const isInvelid = field in form.errors
    if (isTouched && isInvelid) {
      return message
    }
    return ''
  }
  return (
    <form className="container" onSubmit={form.handleSubmit}>
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
              <small>{getErrorMensage('fullName', form.errors.fullName)}</small>
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
              <input
                type="text"
                id="cpf"
                name="cpf"
                value={form.values.cpf}
                onChange={form.handleChange}
                onBlur={form.handleBlur}
              />
              <small>{getErrorMensage('cpf', form.errors.cpf)}</small>
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
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
                {getErrorMensage('deliveryEmail', form.errors.deliveryEmail)}
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
              isActive={!payWithCard}
              onClick={() => setPayWithCard(false)}
            >
              <img src={boleto} alt="" />
              Boleto bancário
            </S.TabButton>
            <S.TabButton
              isActive={payWithCard}
              onClick={() => setPayWithCard(true)}
            >
              <img src={cartao} alt="" />
              Cartão de crédito
            </S.TabButton>
            {payWithCard ? (
              <>
                <S.Row>
                  <S.InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
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
                    <input
                      type="text"
                      id="cpfCardOwner"
                      name="cpfCardOwner"
                      value={form.values.cpfCardOwner}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
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
                    <input
                      type="text"
                      id="cardDisplayName"
                      name="cardDisplayName"
                      value={form.values.cardDisplayName}
                      onChange={form.handleChange}
                      onBlur={form.handleBlur}
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
                      {getErrorMensage('cardNumber', form.errors.cardNumber)}
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
                      {getErrorMensage('expiresYear', form.errors.expiresYear)}
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
                      <option value="1">1x de R$ 100,00</option>
                      <option value="2">2x de R$ 50,00</option>
                      <option value="3">3x de R$ 33,33</option>
                    </select>
                  </S.InputGroup>
                </S.Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button">Finalizar compra</Button>
    </form>
  )
}

export default Checkout
