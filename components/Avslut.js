import { useFormContext } from "react-hook-form";

const Avslut = () => {
    const { register } = useFormContext();
    return (
        <>
            {/* <div>
                <h1>AVSLUTNINGSVIS</h1>
            </div>
            <div>
                <p>5.0</p>
                <p>Utført i hht tegning:</p>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                <input {...register('Avslutningsvis.N5_0.Anmerkning')}   id='Avslutningsvis.N5_0.Anmerkning'  />
            </div> */}
            <tr>
                <td colSpan='6' className='HeadlineCell' >AVSLUTNINGSVIS</td>
            </tr>
            <tr>
                <td>
                    <p>5.0</p>
                </td>
                <td>
                    <p>Utført i hht tegning:</p>
                </td>
                <td colSpan='4'>
                    <textarea {...register('Avslutningsvis.N5_0.UtfTegn')}  id='Avslutningsvis.N5_0.UtfTegn'  />
                </td>
            </tr>
        </>
    )
}

export default Avslut