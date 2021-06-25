import { useFormContext } from "react-hook-form";

const KjenteAvik = () => {
    const { register } = useFormContext();
    return (
        <>
            {/* <div>
                <h1>Allerede Kjente Avik</h1>
            </div>
            <div>
                <p>1.0</p>
                <p>Mottatt avviksmleding på forutgående arbeider:</p>
                <label htmlFor='Resultat'>Resultat:</label>

                <label htmlFor='KjenteAvik.N1_0.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_0.Resultat')} type='radio' name='KjenteAvik.N1_0.Resultat' value='Ja' id='KjenteAvik.N1_0.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_0.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_0.Resultat')} type='radio' name='KjenteAvik.N1_0.Resultat' value='Nei' id='KjenteAvik.N1_0.Resultat.nei' />

                <label htmlFor='Dato'>Dato:</label>
                <input {...register('KjenteAvik.N1_0.Dato')} type='date'  id='KjenteAvik.N1_0.Dato'  />
                <label htmlFor='Sign'>Sign:</label>
                <input {...register('KjenteAvik.N1_0.Sign')} id='KjenteAvik.N1_0.Sign' />
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                <textarea {...register('KjenteAvik.N1_0.Anmerkning')} id='KjenteAvik.N1_0.Anmerkning'  />
            </div> */}
            {/* <div>
                <p>1.1</p>
                <p>Registrerte avvik på forutgående / tilstøtende konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='KjenteAvik.N1_1.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_1.Resultat')} type='radio' name='KjenteAvik.N1_1.Resultat' value='Ja' id='KjenteAvik.N1_1.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_1.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_1.Resultat')} type='radio' name='KjenteAvik.N1_1.Resultat' value='Nei' id='KjenteAvik.N1_1.Resultat.nei' />

                <input {...register('KjenteAvik.N1_1.Dato')} type='date'  id='KjenteAvik.N1_1.Dato'  />
                <input {...register('KjenteAvik.N1_1.Sign')} id='KjenteAvik.N1_1.Sign' />
                <textarea {...register('KjenteAvik.N1_1.Anmerkning')} id='KjenteAvik.N1_1.Anmerkning'  />
            </div>
            <div>
                <p>1.2</p>
                <p>Hvor i bygget er avviket: </p>
                <label htmlFor='KjenteAvik.N1_2.ETG'>ETG:</label>
                <input {...register('KjenteAvik.N1_2.ETG')}     id='KjenteAvik.N1_2.ETG' />

                <label htmlFor='KjenteAvik.N1_2.Fasade'>Fasade:</label>
                <input {...register('KjenteAvik.N1_2.Fasade')}  id='KjenteAvik.N1_2.Fasade' />

                <label htmlFor='KjenteAvik.N1_2.Byggeel'>Byggeel:</label>
                <input {...register('KjenteAvik.N1_2.Byggeel')} id='KjenteAvik.N1_2.Byggeel' />

                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='KjenteAvik.N1_2.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_2.Resultat')} type='radio' name='KjenteAvik.N1_2.Resultat' value='Ja' id='KjenteAvik.N1_2.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_2.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_2.Resultat')} type='radio' name='KjenteAvik.N1_2.Resultat' value='Nei' id='KjenteAvik.N1_2.Resultat.nei' />

                <input {...register('KjenteAvik.N1_2.Dato')} type='date'  id='KjenteAvik.N1_2.Dato'  />
                <input {...register('KjenteAvik.N1_2.Sign')} id='KjenteAvik.N1_2.Sign' />
                <textarea {...register('KjenteAvik.N1_2.Anmerkning')} id='KjenteAvik.N1_2.Anmerkning'  />
            </div>
            <div>
                <p>1.3</p>
                <p>Avvik varslet:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='KjenteAvik.N1_3.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_3.Resultat')} type='radio' name='KjenteAvik.N1_3.Resultat' value='Ja' id='KjenteAvik.N1_3.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_3.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_3.Resultat')} type='radio' name='KjenteAvik.N1_3.Resultat' value='Nei' id='KjenteAvik.N1_3.Resultat.nei' />

                <input {...register('KjenteAvik.N1_3.Dato')} type='date'  id='KjenteAvik.N1_3.Dato'  />
                <input {...register('KjenteAvik.N1_3.Sign')} id='KjenteAvik.N1_3.Sign' />
                <textarea {...register('KjenteAvik.N1_3.Anmerkning')} id='KjenteAvik.N1_2.Anmerkning'  />
            </div>
            <div>
                <p>1.4</p>
                <p>Mottatt beordring om montasje av egne konstruksjoner med avvik:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='KjenteAvik.N1_4.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_4.Resultat')} type='radio' name='KjenteAvik.N1_4.Resultat' value='Ja' id='KjenteAvik.N1_4.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_4.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_4.Resultat')} type='radio' name='KjenteAvik.N1_4.Resultat' value='Nei' id='KjenteAvik.N1_4.Resultat.nei' />

                <input {...register('KjenteAvik.N1_4.Dato')} type='date'  id='KjenteAvik.N1_4.Dato'  />
                <input {...register('KjenteAvik.N1_4.Sign')} id='KjenteAvik.N1_4.Sign' />
                <textarea {...register('KjenteAvik.N1_3.Anmerkning')} id='KjenteAvik.N1_2.Anmerkning'  />
            </div>
            <div>
                <p>1.5</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='KjenteAvik.N1_5.Resultat.ja'>Ja</label>
                <input {...register('KjenteAvik.N1_5.Resultat')} type='radio' name='KjenteAvik.N1_5.Resultat' value='Ja' id='KjenteAvik.N1_5.Resultat.ja' />

                <label htmlFor='KjenteAvik.N1_5.Resultat.nei'>Nei</label>
                <input {...register('KjenteAvik.N1_5.Resultat')} type='radio' name='KjenteAvik.N1_5.Resultat' value='Nei' id='KjenteAvik.N1_5.Resultat.nei' />

                <input {...register('KjenteAvik.N1_5.Dato')} type='date'  id='KjenteAvik.N1_5.Dato'  />
                <input {...register('KjenteAvik.N1_5.Sign')} id='KjenteAvik.N1_5.Sign' />
                <textarea {...register('KjenteAvik.N1_3.Anmerkning')} id='KjenteAvik.N1_2.Anmerkning'  />
            </div> */}

            <tr>
                <td colSpan='6' className='HeadlineCell' >ALLEREDE KJENTE AVVIK</td>
            </tr>
            <tr>
                <td>
                    <p>1.0</p>
                </td>
                <td>
                    <p>Mottatt avviksmleding på forutgående arbeider:</p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_0.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_0.Resultat')} type='radio' name='KjenteAvik.N1_0.Resultat' value='Ja' id='KjenteAvik.N1_0.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_0.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_0.Resultat')} type='radio' name='KjenteAvik.N1_0.Resultat' value='Nei' id='KjenteAvik.N1_0.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_0.Dato')} type='date'  id='KjenteAvik.N1_0.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_0.Sign')} id='KjenteAvik.N1_0.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_0.Anmerkning')} id='KjenteAvik.N1_0.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>1.1</p>
                </td>
                <td>
                    <p>Registrerte avvik på forutgående / tilstøtende konstruksjoner.</p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_1.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_1.Resultat')} type='radio' name='KjenteAvik.N1_1.Resultat' value='Ja' id='KjenteAvik.N1_1.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_1.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_1.Resultat')} type='radio' name='KjenteAvik.N1_1.Resultat' value='Nei' id='KjenteAvik.N1_1.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_1.Dato')} type='date'  id='KjenteAvik.N1_1.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_1.Sign')} id='KjenteAvik.N1_1.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_1.Anmerkning')} id='KjenteAvik.N1_1.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>1.2</p>
                </td>
                <td>
                    <p>Hvor i bygget er avviket:</p><br />
                    <p>ETG: <input {...register('KjenteAvik.N1_2.ETG')} />    Fasade: <input {...register('KjenteAvik.N1_2.ETG')} />    Byggeel: <input {...register('KjenteAvik.N1_2.ETG')} /></p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_2.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_2.Resultat')} type='radio' name='KjenteAvik.N1_2.Resultat' value='Ja' id='KjenteAvik.N1_2.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_2.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_2.Resultat')} type='radio' name='KjenteAvik.N1_2.Resultat' value='Nei' id='KjenteAvik.N1_2.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_2.Dato')} type='date'  id='KjenteAvik.N1_2.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_2.Sign')} id='KjenteAvik.N1_2.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_2.Anmerkning')} id='KjenteAvik.N1_2.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>1.3</p>
                </td>
                <td>
                    <p>Mottatt avviksmleding på forutgående arbeider:</p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_3.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_3.Resultat')} type='radio' name='KjenteAvik.N1_3.Resultat' value='Ja' id='KjenteAvik.N1_3.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_3.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_3.Resultat')} type='radio' name='KjenteAvik.N1_3.Resultat' value='Nei' id='KjenteAvik.N1_3.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_3.Dato')} type='date'  id='KjenteAvik.N1_3.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_3.Sign')} id='KjenteAvik.N1_3.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_3.Anmerkning')} id='KjenteAvik.N1_3.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>1.4</p>
                </td>
                <td>
                    <p>Mottatt avviksmleding på forutgående arbeider:</p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_4.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_4.Resultat')} type='radio' name='KjenteAvik.N1_4.Resultat' value='Ja' id='KjenteAvik.N1_4.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_4.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_4.Resultat')} type='radio' name='KjenteAvik.N1_4.Resultat' value='Nei' id='KjenteAvik.N1_4.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_4.Dato')} type='date'  id='KjenteAvik.N1_4.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_4.Sign')} id='KjenteAvik.N1_4.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_4.Anmerkning')} id='KjenteAvik.N1_4.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>1.5</p>
                </td>
                <td>
                    <p>Mottatt avviksmleding på forutgående arbeider:</p>
                </td>
                <td>
                    <label htmlFor='KjenteAvik.N1_5.Resultat.ja'>Ja</label>
                    <input {...register('KjenteAvik.N1_5.Resultat')} type='radio' name='KjenteAvik.N1_5.Resultat' value='Ja' id='KjenteAvik.N1_5.Resultat.ja' />

                    <label htmlFor='KjenteAvik.N1_5.Resultat.nei'>Nei</label>
                    <input {...register('KjenteAvik.N1_5.Resultat')} type='radio' name='KjenteAvik.N1_5.Resultat' value='Nei' id='KjenteAvik.N1_5.Resultat.nei' />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_5.Dato')} type='date'  id='KjenteAvik.N1_5.Dato'  />
                </td>
                <td>
                    <input {...register('KjenteAvik.N1_5.Sign')} id='KjenteAvik.N1_5.Sign' />
                </td>
                <td>
                    <textarea {...register('KjenteAvik.N1_5.Anmerkning')} id='KjenteAvik.N1_5.Anmerkning'  />
                </td>
            </tr>
        </>
    )
}

export default KjenteAvik