import React from 'react';

import '../css/Footer.css';

export default function Footer() {
    return (
        <div>
            <div className="footer p-d-none p-d-md-flex p-align-center p-justify-center">
                <p>Todos os direitos reservados para fulano de tal ai com poder de ser dono disso aqui &copy;</p>
            </div>
            <div className="footerResp flex p-d-md-none p-align-center p-justify-center">
                <p>Todos os direitos reservados para fulano de tal ai com poder de ser dono disso aqui &copy;</p>
            </div>
        </div>
    )
}
