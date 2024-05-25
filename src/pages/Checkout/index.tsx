import { useState } from 'react'
import Button from '../../components/Button'
import Card from '../../components/Card'
import * as S from './styles'

import boleto from '../../assets/images/boleto.png'
import cartao from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPayWithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="fullName">Nome completo</label>
              <input type="text" id="fullName" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input type="text" id="cpf" />
            </S.InputGroup>
          </S.Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <S.Row>
            <S.InputGroup>
              <label htmlFor="deliveryEmail">Email</label>
              <input type="email" id="deliveryEmail" />
            </S.InputGroup>
            <S.InputGroup>
              <label htmlFor="confirmEmail">Confirme o email</label>
              <input type="email" id="confirmEmail" />
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
                    <label htmlFor="titularName">
                      Nome do titular do cartão
                    </label>
                    <input type="text" id="titularName" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="titularCpf">CPF</label>
                    <input type="text" id="titularCpf" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Nome do cartão</label>
                    <input type="text" id="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="cardNumber">Número do cartão</label>
                    <input type="text" id="cardNumber" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="123px">
                    <label htmlFor="expiresMonth">Mês de vencimento</label>
                    <input type="text" id="experiesMonth" />
                  </S.InputGroup>
                  <S.InputGroup>
                    <label htmlFor="expiresYear">Ano de vencimento</label>
                    <input type="text" id="experiesYear" />
                  </S.InputGroup>
                  <S.InputGroup maxWidth="48px">
                    <label htmlFor="cvv">CVV</label>
                    <input type="text" id="cvv" />
                  </S.InputGroup>
                </S.Row>
                <S.Row marginTop="24px">
                  <S.InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelas</label>
                    <select name="" id="">
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
    </div>
  )
}

export default Checkout
