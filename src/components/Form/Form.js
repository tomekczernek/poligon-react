import styled from 'styled-components';

function Form({children, className, ...restProps}){
    return (
        <form className={className} {...restProps}>
            {children}
        </form>
    );
}

const FormWrapper = styled(Form)`
    border-color: #8e44ad;
    padding: 10px;
`;

export {Form};
export default FormWrapper;