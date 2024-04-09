import { ButtonContainer, ButtonLink } from './styles'

type Props = {
  type: 'button' | 'link'
  title?: string
  to?: string
  children: string
  onClick?: () => void
}

const Button = ({ type, to, children, title, onClick }: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer title={title} onClick={onClick}>
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink title={title} to={to as string}>
      {children}
    </ButtonLink>
  )
}

export default Button
