import { useFormContext } from "react-hook-form";

const FeilSkader = () => {
    const { register } = useFormContext();
    return (
        <>
            {/* <div>
                <h1>FEIL/SKADER</h1>
            </div>
            <div>
                <p>4.0</p>
                <p>Hva er feil / skadet:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='FeilSkader.N4_0.Resultat'>Resultat:</label>
                <input {...register('FeilSkader.N4_0.Resultat')} id='FeilSkader.N4_0.Resultat' />

                <input {...register('FeilSkader.N4_0.Dato')} type='date'          id='FeilSkader.N4_0.Dato'  />
                <input {...register('FeilSkader.N4_0.Sign')}         id='FeilSkader.N4_0.Sign' />
                <input {...register('FeilSkader.N4_0.Anmerkning')}   id='FeilSkader.N4_0.Anmerkning'  />
            </div>
            <div>
                <p>4.1</p>
                <p>Feil / skader utbedret:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
              
                <label htmlFor='FeilSkader.N4_1.Resultat.ja'>Ja</label>
                <input {...register('FeilSkader.N4_1.Resultat')} type='radio' name='FeilSkader.N4_1.Resultat' value='Ja' id='FeilSkader.N4_1.Resultat.ja' />

                <label htmlFor='FeilSkader.N4_1.Resultat.nei'>Nei</label>
                <input {...register('FeilSkader.N4_1.Resultat')} type='radio' name='FeilSkader.N4_1.Resultat' value='Nei' id='FeilSkader.N4_1.Resultat.nei' />

                <input {...register('FeilSkader.N4_1.Dato')} type='date'          id='FeilSkader.N4_1.Dato'  />
                <input {...register('FeilSkader.N4_1.Sign')}         id='FeilSkader.N4_1.Sign' />
                <input {...register('FeilSkader.N4_1.Anmerkning')}   id='FeilSkader.N4_1.Anmerkning'  />
            </div> */}

            <tr>
                <td colSpan='6' className='HeadlineCell' >FEIL/SKADER</td>
            </tr>
            <tr>
                <td>
                    <p>4.0</p>
                </td>
                <td>
                    <p>Hva er feil / skadet:</p>
                </td>
                <td>
                    <input {...register('FeilSkader.N4_0.Resultat')}  id='FeilSkader.N4_0.Resultat'  />
                </td>
                <td>
                    <input {...register('FeilSkader.N4_0.Dato')} type='date'  id='FeilSkader.N4_0.Dato'  />
                </td>
                <td>
                    <input {...register('FeilSkader.N4_0.Sign')} id='FeilSkader.N4_0.Sign' />
                </td>
                <td>
                    <textarea {...register('FeilSkader.N4_0.Anmerkning')} id='FeilSkader.N4_0.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>4.1</p>
                </td>
                <td>
                    <p>Feil / skader utbedret:</p>
                </td>
                <td>
                    <label htmlFor='FeilSkader.N4_1.Resultat.ja'>Ja</label>
                    <input {...register('FeilSkader.N4_1.Resultat')} type='radio' name='FeilSkader.N4_1.Resultat' value='Ja' id='FeilSkader.N4_1.Resultat.ja' />

                    <label htmlFor='FeilSkader.N4_1.Resultat.nei'>Nei</label>
                    <input {...register('FeilSkader.N4_1.Resultat')} type='radio' name='FeilSkader.N4_1.Resultat' value='Nei' id='FeilSkader.N4_1.Resultat.nei' />
                </td>
                <td>
                    <input {...register('FeilSkader.N4_1.Dato')} type='date'  id='FeilSkader.N4_1.Dato'  />
                </td>
                <td>
                    <input {...register('FeilSkader.N4_1.Sign')} id='FeilSkader.N4_1.Sign' />
                </td>
                <td>
                    <textarea {...register('FeilSkader.N4_1.Anmerkning')} id='FeilSkader.N4_1.Anmerkning'  />
                </td>
            </tr>
        </>
    )
}

export default FeilSkader