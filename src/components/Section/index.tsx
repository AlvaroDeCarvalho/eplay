import * as S from './styles'

export type Props = {
  title: string
  background: 'black' | 'gray'
  children: JSX.Element
}

const Section = ({ title, background, children }: Props) => {
  return (
    <div className="container">
      <S.Container background={background}>
        <h2>{title}</h2>
        {children}
      </S.Container>
    </div>
  )
}
export default Section
