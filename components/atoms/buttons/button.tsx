import { ButtonStyle } from '../../../src/styles/components/atoms/buttons'

export default function Button(props: any){

    return(
        <> 
        <ButtonStyle className={props.type}>{props.children}</ButtonStyle>
        </>
    )
}
