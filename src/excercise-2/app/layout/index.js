import React from 'react'

export const Layout = ({ children, className = 'ma_container ma_layout ', ...props }) => {
  return (
    <main className={className} {...props} role='main'>
      {children}
    </main>
  )
}

export const Nav = ({ children, className = 'ma_container ma_nav', ...props }) => {
  return (
    <nav className={className} {...props} role='navigation'>
      {children}
    </nav>
  )
}

export const Footer = ({ className = 'ma_container ma_footer ma_centered', ...props }) => {
  return (
    <footer className={className} {...props}>
            Movie App - {new Date().getFullYear()}
    </footer>
  )
}
