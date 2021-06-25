import { useFormContext } from "react-hook-form";

const Solskjerming = () => {
    const { register } = useFormContext();
    return (
        <>
            {/* <div>
                <h1>Solskjerming</h1>
            </div>
            <div>
                <p>3.0</p>
                <p>Er Solskjerming montert</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Solskjerming.N3_0.Resultat.ja'>Ja</label>
                <input {...register('Solskjerming.N3_0.Resultat')} type='radio' name='Solskjerming.N3_0.Resultat' value='Ja' id='Solskjerming.N3_0.Resultat.ja' />

                <label htmlFor='Solskjerming.N3_0.Resultat.nei'>Nei</label>
                <input {...register('Solskjerming.N3_0.Resultat')} type='radio' name='Solskjerming.N3_0.Resultat' value='Nei' id='Solskjerming.N3_0.Resultat.nei' />

                <input {...register('Solskjerming.N3_0.Dato')} type='date'          id='Solskjerming.N3_0.Dato'  />
                <input {...register('Solskjerming.N3_0.Sign')}         id='Solskjerming.N3_0.Sign' />
                <input {...register('Solskjerming.N3_0.Anmerkning')}   id='Solskjerming.N3_0.Anmerkning'  />
            </div>
            <div>
                <p>3.1</p>
                <p>Er det tettet rundt kabelgjennomføring og strekkavlastning strammet?</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Solskjerming.N3_1.Resultat.ja'>Ja</label>
                <input {...register('Solskjerming.N3_1.Resultat')} type='radio' name='Solskjerming.N3_1.Resultat' value='Ja' id='Solskjerming.N3_1.Resultat.ja' />

                <label htmlFor='Solskjerming.N3_1.Resultat.nei'>Nei</label>
                <input {...register('Solskjerming.N3_1.Resultat')} type='radio' name='Solskjerming.N3_1.Resultat' value='Nei' id='Solskjerming.N3_1.Resultat.nei' />

                <input {...register('Solskjerming.N3_1.Dato')} type='date'          id='Solskjerming.N3_1.Dato'  />
                <input {...register('Solskjerming.N3_1.Sign')}         id='Solskjerming.N3_1.Sign' />
                <input {...register('Solskjerming.N3_1.Anmerkning')}   id='Solskjerming.N3_1.Anmerkning'  />
            </div>
            <div>
                <p>3.2</p>
                <p>Mottatt egenkontrollskjema for solavskjerming </p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Solskjerming.N3_2.Resultat.ja'>Ja</label>
                <input {...register('Solskjerming.N3_2.Resultat')} type='radio' name='Solskjerming.N3_2.Resultat' value='Ja' id='Solskjerming.N3_2.Resultat.ja' />

                <label htmlFor='Solskjerming.N3_2.Resultat.nei'>Nei</label>
                <input {...register('Solskjerming.N3_2.Resultat')} type='radio' name='Solskjerming.N3_2.Resultat' value='Nei' id='Solskjerming.N3_2.Resultat.nei' />

                <input {...register('Solskjerming.N3_2.Dato')} type='date'          id='Solskjerming.N3_2.Dato'  />
                <input {...register('Solskjerming.N3_2.Sign')}         id='Solskjerming.N3_2.Sign' />
                <input {...register('Solskjerming.N3_2.Anmerkning')}   id='Solskjerming.N3_2.Anmerkning'  />
            </div> */}

            <tr>
                <td colSpan='6' className='HeadlineCell' >Solskjerming</td>
            </tr>
            <tr>
                <td>
                    <p>3.0</p>
                </td>
                <td>
                    <p>Er Solskjerming montert</p>
                </td>
                <td>
                    <label htmlFor='Solskjerming.N3_0.Resultat.ja'>Ja</label>
                    <input {...register('Solskjerming.N3_0.Resultat')} type='radio' name='Solskjerming.N3_0.Resultat' value='Ja' id='Solskjerming.N3_0.Resultat.ja' />

                    <label htmlFor='Solskjerming.N3_0.Resultat.nei'>Nei</label>
                    <input {...register('Solskjerming.N3_0.Resultat')} type='radio' name='Solskjerming.N3_0.Resultat' value='Nei' id='Solskjerming.N3_0.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_0.Dato')} type='date'  id='Solskjerming.N3_0.Dato'  />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_0.Sign')} id='Solskjerming.N3_0.Sign' />
                </td>
                <td>
                    <textarea {...register('Solskjerming.N3_0.Anmerkning')} id='Solskjerming.N3_0.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>3.1</p>
                </td>
                <td>
                    <p>Er det tettet rundt kabelgjennomføring og strekkavlastning strammet?</p>
                </td>
                <td>
                    <label htmlFor='Solskjerming.N3_1.Resultat.ja'>Ja</label>
                    <input {...register('Solskjerming.N3_1.Resultat')} type='radio' name='Solskjerming.N3_1.Resultat' value='Ja' id='Solskjerming.N3_1.Resultat.ja' />

                    <label htmlFor='Solskjerming.N3_1.Resultat.nei'>Nei</label>
                    <input {...register('Solskjerming.N3_1.Resultat')} type='radio' name='Solskjerming.N3_1.Resultat' value='Nei' id='Solskjerming.N3_1.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_1.Dato')} type='date'  id='Solskjerming.N3_1.Dato'  />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_1.Sign')} id='Solskjerming.N3_1.Sign' />
                </td>
                <td>
                    <textarea {...register('Solskjerming.N3_1.Anmerkning')} id='Solskjerming.N3_1.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>3.2</p>
                </td>
                <td>
                    <p>Mottatt egenkontrollskjema for solavskjerming</p>
                </td>
                <td>
                    <label htmlFor='Solskjerming.N3_2.Resultat.ja'>Ja</label>
                    <input {...register('Solskjerming.N3_2.Resultat')} type='radio' name='Solskjerming.N3_2.Resultat' value='Ja' id='Solskjerming.N3_2.Resultat.ja' />

                    <label htmlFor='Solskjerming.N3_2.Resultat.nei'>Nei</label>
                    <input {...register('Solskjerming.N3_2.Resultat')} type='radio' name='Solskjerming.N3_2.Resultat' value='Nei' id='Solskjerming.N3_2.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_2.Dato')} type='date'  id='Solskjerming.N3_2.Dato'  />
                </td>
                <td>
                    <input {...register('Solskjerming.N3_2.Sign')} id='Solskjerming.N3_2.Sign' />
                </td>
                <td>
                    <textarea {...register('Solskjerming.N3_2.Anmerkning')} id='Solskjerming.N3_2.Anmerkning'  />
                </td>
            </tr>

        </>
    )
}

export default Solskjerming