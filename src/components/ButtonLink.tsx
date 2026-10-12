import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  children: ReactNode
  trailingIcon?: ReactNode
}

function ButtonLink({ href, children, trailingIcon }: ButtonLinkProps) {
  return (
    <a className="primary-link" href={href}>
      {children}
      {trailingIcon && <span aria-hidden="true">{trailingIcon}</span>}
    </a>
  )
}

export default ButtonLink
