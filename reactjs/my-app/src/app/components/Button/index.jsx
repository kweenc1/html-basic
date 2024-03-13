

const CustomButton = (props) => {
    const classNames ={
        primary: 'btnblack',
        outline: 'btnoutline',
        secondary: 'btn-secondary'
    }
    const className = classNames[props.type] || classNames.primary
    return(
        
       props.onClick ? <button onClick={props.onClick} className={className}>{props.children}</button>
            :
        <a href="#" className={className}>{props.children}</a>
    )
}

export default CustomButton;