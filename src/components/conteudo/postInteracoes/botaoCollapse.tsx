import { CButton, CCard, CCardBody, CCollapse } from '@coreui/react';
import { useState } from 'react';

export default function Botao(){
    const [visible, setVisible] = useState(false)
    return (
    <>
        <CButton href="#" onClick={(event) => {
        event.preventDefault();
        setVisible(!visible);
        }}>
        </CButton>
        <CButton onClick={() => setVisible(!visible)}>Saiba Mais</CButton>
        <CCollapse visible={visible}>
        <CCard className="mt-3">
            <CCardBody>
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad
            squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt
            sapiente ea proident.
            </CCardBody>
        </CCard>
        </CCollapse>
    </>
)
}