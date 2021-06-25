import { useFormContext } from "react-hook-form";

const SkjemaHeader = () => {
    const { register } = useFormContext();
    return (
        <>
            <tr>
                <td rowSpan='2'>
                    <h2>Profilteam as</h2>
                </td>
                <td>
                    <p><i>Skjema: Sjekkliste</i></p>
                </td>
                <td>
                    <p><i>Skjema nr:</i></p>
                </td>
                <td>
                    <input {...register('SkjemaNr')} id='SkjemaNr' />
                </td>
                
            </tr>
            <tr>
                <td>
                    <p><b>Vindu FOP</b></p>
                </td>
                <td>
                    <p><i>Rev.nr/dato:</i></p>
                </td>
                <td>
                <input {...register('Dato')} type='date' id='Dato' />
                </td>
            </tr>
        </>
    )
}

export default SkjemaHeader
