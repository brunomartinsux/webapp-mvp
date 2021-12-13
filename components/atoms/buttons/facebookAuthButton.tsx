import { FacebookButtonStyle } from '../../../src/styles/components/atoms/buttons'

export default function FacebookAuthButton(){


    const logEvent = (string:string) => {
     console.log(string);
        
    }

    return(
        <> 
        <FacebookButtonStyle onClick={() => logEvent('string')}>Entrar com Facebook</FacebookButtonStyle>
        </>
    )
}
