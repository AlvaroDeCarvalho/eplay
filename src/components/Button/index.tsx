import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link'
  title?: string
  to?: string
  children: string
  onClick?: () => void
  variant?: 'primary' | 'secundary'
}

const Button = ({
  type,
  to,
  children,
  title,
  onClick,
  variant = 'primary'
}: Props) => {
  if (type === 'button') {
    return (
      <ButtonContainer
        variant={variant}
        title={title}
        onClick={onClick}
        type="button"
      >
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
