export function Button({children ,variant,size, background}) {
   const baseStyles =  "rounded-full"
   const variants = {
    primary: "border-2 border-solid border-black",
    secondary: " border-none p-[10px]"
   }
   const sizes = {
     sm: "p-[10px]",
     md: "py-[10px] px-[15px]",
     lg:"py-[8px] px-[25px]"
   }

   const backgrounds={
    priColor: "bg-[var(--color-primary)]",
    secColor: "bg-white",
    tertColor: "bg-[#F8721F]"

   }


    return <button className ={` ${baseStyles} ${variants[variant]} ${sizes[size]} ${backgrounds[background]}`}>{children}</button>
}