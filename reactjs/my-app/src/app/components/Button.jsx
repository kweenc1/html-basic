const Button = ({onclick, children}) => {
    return(
        <button onclick={onclick}>
        {children}

        </button>
    )
}

export default Button;