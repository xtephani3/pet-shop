export function Button({ children, variant, size, background, color, type= "submit",disabled, ...props}) {
  const baseStyles = "rounded-full"
  const variants = {
    primary: "border-2 border-solid border-black",
    secondary: " border-none p-[10px]"
  }
  const sizes = {
    sm: "p-[10px]",
    md: "py-[10px] px-[15px]",
    lg: "py-[8px] px-[25px]",
    xl: "w-[566px] h-[50px]"
  }

  const backgrounds = {
    priColor: "bg-[var(--color-primary)]",
    secColor: "bg-white",
    tertColor: "bg-[var(--color-secondary)]",

  }

  const colors = {
    whiteColor: "text-[#fff]",
  }


  return <button {...props} type={type} disabled={disabled} className={` ${baseStyles} ${variants[variant]} ${sizes[size]} ${backgrounds[background]} ${colors[color]}`}>{children}</button>
}