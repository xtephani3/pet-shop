export function LoginInput({ placeholder, type = "text", required = false, name, size, ...props }) {
    const defaultStyles =  " box-border rounded-[30px] border-[#DEE2E6] border-solid border-[2px] bg-[#F6F6F6] h-[50px] pl-[15px]"
    const sizes = {
        sm: "w-[283px]",
        md: "w-[566px]",
    }
    return (
        <div>
            <input {...props} className={`${defaultStyles} ${sizes[size]} `} placeholder={placeholder} type={type} required={required} name={name} />
        </div>
    )
}