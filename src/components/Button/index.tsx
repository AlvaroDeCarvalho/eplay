import { ButtonContainer, ButtonLink } from './styles'

export type Props = {
  type: 'button' | 'link' | 'submit'
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
  if (type === 'button' || type === 'submit') {
    return (
      <ButtonContainer
        variant={variant}
        title={title}
        onClick={onClick}
        type={type}
      >
        {children}
      </ButtonContainer>
    )
  }
  return (
    <ButtonLink title={title} to={to as string} type="link">
      {children}
    </ButtonLink>
  )
}

export default Button
