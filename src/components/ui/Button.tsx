interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline'
  as?: 'button' | 'a'
  href?: string
  children: React.ReactNode
}

const variants = {
  primary: 'bg-nt-green-700 text-white hover:bg-nt-green-800',
  secondary: 'bg-nt-earth-200 text-nt-earth-900 hover:bg-nt-earth-300',
  outline: 'border-2 border-nt-green-700 text-nt-green-700 hover:bg-nt-green-700 hover:text-white',
}

export function Button({ variant = 'primary', as = 'button', href, className = '', children, ...props }: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center px-6 py-3 font-medium rounded-lg transition-colors text-sm'
  const classes = `${baseClasses} ${variants[variant]} ${className}`

  if (as === 'a' && href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
