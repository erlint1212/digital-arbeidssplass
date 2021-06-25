import { useFormContext } from "react-hook-form"

export const SkjemaFooter = () => {
    const { register } = useFormContext();
    return (
        <>
            <tr>
                <td>
                    <p><i>Prosjektnummer:</i></p>
                </td>
                <td>
                    <input {...register('Prosjektnummer')} id='Prosjektnummer' />
                </td>
                <td>
                    <p><i>Prosjektleder:</i></p>  
                </td>
                <td>
                    <input {...register('ProsjekLeder')} id='ProsjekLeder' />
                </td>
            </tr>
            <tr>
                <td>
                    <p><i>Prosjektnavn:</i></p>
                </td>
                <td>
                    <input {...register('ProsjektNavn')} id='ProsjektNavn' />
                </td>
                <td>
                    <p><i>Byggeplassleder:</i></p>  
                </td>
                <td>
                    <input {...register('Byggeplassleder')} id='Byggeplassleder' />
                </td>
            </tr>
        </>
    )
}
