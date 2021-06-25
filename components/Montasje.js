import { useFormContext } from "react-hook-form";

const Montasje = () => {
    const { register } = useFormContext();
    return (
        <>
            {/* <div>
                <h1>Montasje</h1>
            </div>
            <div>
                <p>2.0</p>
                <p>Mottatt avviksmleding på forutgående arbeider:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_0.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_0.Resultat')} type='radio' name='Montasje.N2_0.Resultat' value='Ja' id='Montasje.N2_0.Resultat.ja' />

                <label htmlFor='Montasje.N2_0.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_0.Resultat')} type='radio' name='Montasje.N2_0.Resultat' value='Nei' id='Montasje.N2_0.Resultat.nei' />

                <input {...register('Montasje.N2_0.Dato')} type='date'  id='Montasje.N2_0.Dato'  />
                <input {...register('Montasje.N2_0.Sign')} id='Montasje.N2_0.Sign' />
                <input {...register('Montasje.N2_0.Anmerkning')} id='Montasje.N2_0.Anmerkning'  />
            </div>
            <div>
                <p>2.1</p>
                <p>Registrerte avvik på forutgående / tilstøtende konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_1.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_1.Resultat')} type='radio' name='Montasje.N2_1.Resultat' value='Ja' id='Montasje.N2_1.Resultat.ja' />

                <label htmlFor='Montasje.N2_1.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_1.Resultat')} type='radio' name='Montasje.N2_1.Resultat' value='Nei' id='Montasje.N2_1.Resultat.nei' />

                <input {...register('Montasje.N2_1.Dato')} type='date'  id='Montasje.N2_1.Dato'  />
                <input {...register('Montasje.N2_1.Sign')} id='Montasje.N2_1.Sign' />
                <input {...register('Montasje.N2_1.Anmerkning')} id='Montasje.N2_1.Anmerkning'  />
            </div>
            <div>
                <p>2.2</p>
                <p>Hvor i bygget er avviket: </p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_2.Størst'>Størst:</label>
                <input {...register('Montasje.N2_2.Størst')}  id='Montasje.N2_2.Størst' />

                <label htmlFor='Montasje.N2_2.Minst'>Minst:</label>
                <input {...register('Montasje.N2_2.Minst')} id='Montasje.N2_2.Minst' />

                <input {...register('Montasje.N2_2.Dato')} type='date'  id='Montasje.N2_2.Dato'  />
                <input {...register('Montasje.N2_2.Sign')} id='Montasje.N2_2.Sign' />
                <input {...register('Montasje.N2_2.Anmerkning')} id='Montasje.N2_2.Anmerkning'  />
            </div>
            <div>
                <p>2.3</p>
                <p>Avvik varslet:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_3.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_3.Resultat')} type='radio' name='Montasje.N2_3.Resultat' value='Ja' id='Montasje.N2_3.Resultat.ja' />

                <label htmlFor='Montasje.N2_3.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_3.Resultat')} type='radio' name='Montasje.N2_3.Resultat' value='Nei' id='Montasje.N2_3.Resultat.nei' />

                <input {...register('Montasje.N2_3.Dato')} type='date'  id='Montasje.N2_3.Dato'  />
                <input {...register('Montasje.N2_3.Sign')} id='Montasje.N2_3.Sign' />
                <input {...register('Montasje.N2_3.Anmerkning')} id='Montasje.N2_3.Anmerkning'  />
            </div>
            <div>
                <p>2.4</p>
                <p>Mottatt beordring om montasje av egne konstruksjoner med avvik:</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_4.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_4.Resultat')} type='radio' name='Montasje.N2_4.Resultat' value='Ja' id='Montasje.N2_4.Resultat.ja' />

                <label htmlFor='Montasje.N2_4.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_4.Resultat')} type='radio' name='Montasje.N2_4.Resultat' value='Nei' id='Montasje.N2_4.Resultat.nei' />

                <input {...register('Montasje.N2_4.Dato')} type='date'  id='Montasje.N2_4.Dato'  />
                <input {...register('Montasje.N2_4.Sign')} id='Montasje.N2_4.Sign' />
                <input {...register('Montasje.N2_4.Anmerkning')} id='Montasje.N2_4.Anmerkning'  />
            </div>
            <div>
                <p>2.5</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>

                <label htmlFor='Montasje.N2_5.Målt'>Målt:</label>
                <input {...register('Montasje.N2_5.Målt')} id='Montasje.N2_5.Målt' />

                <input {...register('Montasje.N2_5.Dato')} type='date'  id='Montasje.N2_5.Dato'  />
                <input {...register('Montasje.N2_5.Sign')} id='Montasje.N2_5.Sign' />
                <input {...register('Montasje.N2_5.Anmerkning')} id='Montasje.N2_5.Anmerkning'  />
            </div>
            <div>
                <p>2.6</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_6.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_6.Resultat')} type='radio' name='Montasje.N2_6.Resultat' value='Ja' id='Montasje.N2_6.Resultat.ja' />

                <label htmlFor='Montasje.N2_6.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_6.Resultat')} type='radio' name='Montasje.N2_6.Resultat' value='Nei' id='Montasje.N2_6.Resultat.nei' />

                <input {...register('Montasje.N2_6.Dato')} type='date'  id='Montasje.N2_6.Dato'  />
                <input {...register('Montasje.N2_6.Sign')} id='Montasje.N2_6.Sign' />
                <input {...register('Montasje.N2_6.Anmerkning')} id='Montasje.N2_6.Anmerkning'  />
            </div>
            <div>
                <p>2.7</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_7.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_7.Resultat')} type='radio' name='Montasje.N2_7.Resultat' value='Ja' id='Montasje.N2_7.Resultat.ja' />

                <label htmlFor='Montasje.N2_7.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_7.Resultat')} type='radio' name='Montasje.N2_7.Resultat' value='Nei' id='Montasje.N2_7.Resultat.nei' />

                <input {...register('Montasje.N2_7.Dato')} type='date'  id='Montasje.N2_0.Dato'  />
                <input {...register('Montasje.N2_7.Sign')} id='Montasje.N2_0.Sign' />
                <input {...register('Montasje.N2_7.Anmerkning')} id='Montasje.N2_0.Anmerkning'  />
            </div>
            <div>
                <p>2.8</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_8.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_8.Resultat')} type='radio' name='Montasje.N2_8.Resultat' value='Ja' id='Montasje.N2_8.Resultat.ja' />

                <label htmlFor='Montasje.N2_8.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_8.Resultat')} type='radio' name='Montasje.N2_8.Resultat' value='Nei' id='Montasje.N2_8.Resultat.nei' />

                <input {...register('Montasje.N2_8.Dato')} type='date'  id='Montasje.N2_8.Dato'  />
                <input {...register('Montasje.N2_8.Sign')} id='Montasje.N2_8.Sign' />
                <input {...register('Montasje.N2_8.Anmerkning')} id='Montasje.N2_8.Anmerkning'  />
            </div>
            <div>
                <p>2.9</p>
                <p>Beskrivelse av montasjeavvik egne konstruksjoner.</p>
                <label htmlFor='Resultat'>Resultat:</label>
                <label htmlFor='Dato'>Dato:</label>
                <label htmlFor='Sign'>Sign:</label>
                <label htmlFor='Anmerkning'>Anmerkning:</label>
                
                <label htmlFor='Montasje.N2_9.Resultat.ja'>Ja</label>
                <input {...register('Montasje.N2_9.Resultat')} type='radio' name='Montasje.N2_9.Resultat' value='Ja' id='Montasje.N2_9.Resultat.ja' />

                <label htmlFor='Montasje.N2_9.Resultat.nei'>Nei</label>
                <input {...register('Montasje.N2_9.Resultat')} type='radio' name='Montasje.N2_9.Resultat' value='Nei' id='Montasje.N2_9.Resultat.nei' />

                <input {...register('Montasje.N2_9.Dato')} type='date'  id='Montasje.N2_9.Dato'  />
                <input {...register('Montasje.N2_9.Sign')} id='Montasje.N2_9.Sign' />
                <input {...register('Montasje.N2_9.Anmerkning')} id='Montasje.N2_9.Anmerkning'  />
            </div> */}
            <tr>
                <td colSpan='6' className='HeadlineCell' >MONTASJE</td>
            </tr>
            <tr>
                <td>
                    <p>2.0</p>
                </td>
                <td>
                    <p>Mottatt avviksmleding på forutgående arbeider:</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_0.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_0.Resultat')} type='radio' name='Montasje.N2_0.Resultat' value='Ja' id='Montasje.N2_0.Resultat.ja' />

                    <label htmlFor='Montasje.N1_0.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_0.Resultat')} type='radio' name='Montasje.N2_0.Resultat' value='Nei' id='Montasje.N2_0.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_0.Dato')} type='date'  id='Montasje.N2_0.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_0.Sign')} id='Montasje.N2_0.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_0.Anmerkning')} id='Montasje.N2_0.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.1</p>
                </td>
                <td>
                    <p>Registrerte avvik på forutgående / tilstøtende konstruksjoner.</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_1.Størst'>Størst:</label>
                    <input {...register('Montasje.N2_1.Størst')}  id='Montasje.N2_1.Størst' />
                    <br />

                    <label htmlFor='Montasje.N2_1.Minst'>Minst:</label>
                    <input {...register('Montasje.N2_1.Minst')} id='Montasje.N2_1.Minst' />
                </td>
                <td>
                    <input {...register('Montasje.N2_1.Dato')} type='date'  id='Montasje.N2_1.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_1.Sign')} id='Montasje.N2_1.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_1.Anmerkning')} id='Montasje.N2_1.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.2</p>
                </td>
                <td>
                    <p>Hvor i bygget er avviket:</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_2.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_2.Resultat')} type='radio' name='Montasje.N2_2.Resultat' value='Ja' id='Montasje.N2_2.Resultat.ja' />

                    <label htmlFor='Montasje.N2_2.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_2.Resultat')} type='radio' name='Montasje.N2_2.Resultat' value='Nei' id='Montasje.N2_2.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_2.Dato')} type='date'  id='Montasje.N2_2.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_2.Sign')} id='Montasje.N2_2.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_2.Anmerkning')} id='Montasje.N2_2.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>2.3</p>
                </td>
                <td>
                    <p>Korrekt utført drenering og lufting iht Profilteams montasjeanvisning. (Plastomslag).</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_3.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_3.Resultat')} type='radio' name='Montasje.N2_3.Resultat' value='Ja' id='Montasje.N2_3.Resultat.ja' />

                    <label htmlFor='Montasje.N1_3.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_3.Resultat')} type='radio' name='Montasje.N2_3.Resultat' value='Nei' id='Montasje.N2_3.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_3.Dato')} type='date'  id='Montasje.N2_3.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_3.Sign')} id='Montasje.N2_3.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_3.Anmerkning')} id='Montasje.N2_3.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>2.4</p>
                </td>
                <td>
                    <p>Er bolter installert ihht NS-EN 1090-2, pkt 8.3</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_4.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_4.Resultat')} type='radio' name='Montasje.N2_4.Resultat' value='Ja' id='Montasje.N2_4.Resultat.ja' />

                    <label htmlFor='Montasje.N2_4.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_4.Resultat')} type='radio' name='Montasje.N2_4.Resultat' value='Nei' id='Montasje.N2_4.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_4.Dato')} type='date'  id='Montasje.N1_4.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_4.Sign')} id='Montasje.N2_4.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_4.Anmerkning')} id='Montasje.N2_4.Anmerkning'  />
                </td>
            </tr>
            
            <tr>
                <td>
                    <p>2.5</p>
                </td>
                <td>
                    <p>Kontroller avstand fra utvendig montasjeplate til skulder betong. Minimum 10 mm, maks 13. Angi målt verdi</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_5.Målt'>Målt:</label>
                    <input {...register('Montasje.N2_5.Målt')} id='Montasje.N2_5.Målt' />
                </td>
                <td>
                    <input {...register('Montasje.N2_5.Dato')} type='date'  id='Montasje.N2_5.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_5.Sign')} id='Montasje.N2_5.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_5.Anmerkning')} id='Montasje.N2_5.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.6</p>
                </td>
                <td>
                    <p>Er fuge utført korrekt og KS skjema mottatt fra UE.</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_6.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_6.Resultat')} type='radio' name='Montasje.N2_6.Resultat' value='Ja' id='Montasje.N2_6.Resultat.ja' />

                    <label htmlFor='Montasje.N2_6.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_6.Resultat')} type='radio' name='Montasje.N2_6.Resultat' value='Nei' id='Montasje.N2_6.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_6.Dato')} type='date'  id='Montasje.N2_6.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_6.Sign')} id='Montasje.N2_6.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_6.Anmerkning')} id='Montasje.N2_6.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.7</p>
                </td>
                <td>
                    <p>Treverk er montert uten synlige skader og med riktig type skruer (fargede skruer A4) ?</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_7.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_7.Resultat')} type='radio' name='Montasje.N2_7.Resultat' value='Ja' id='Montasje.N2_7.Resultat.ja' />

                    <label htmlFor='Montasje.N2_7.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_7.Resultat')} type='radio' name='Montasje.N2_7.Resultat' value='Nei' id='Montasje.N2_7.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_7.Dato')} type='date'  id='Montasje.N2_7.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_7.Sign')} id='Montasje.N2_7.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_7.Anmerkning')} id='Montasje.N2_7.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.8</p>
                </td>
                <td>
                    <p>Er sålebenkbeslag og beslag på bånnstokk montert med syrefaste skruer og med korrekte luftespalter?</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_8.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_8.Resultat')} type='radio' name='Montasje.N2_8.Resultat' value='Ja' id='Montasje.N2_8.Resultat.ja' />

                    <label htmlFor='Montasje.N2_8.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_8.Resultat')} type='radio' name='Montasje.N2_8.Resultat' value='Nei' id='Montasje.N2_8.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_8.Dato')} type='date'  id='Montasje.N2_8.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_8.Sign')} id='Montasje.N2_8.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_8.Anmerkning')} id='Montasje.N2_8.Anmerkning'  />
                </td>
            </tr>

            <tr>
                <td>
                    <p>2.9</p>
                </td>
                <td>
                    <p>Produktet er levert uten feil/skader og fungerer som den skal ?</p>
                </td>
                <td>
                    <label htmlFor='Montasje.N2_9.Resultat.ja'>Ja</label>
                    <input {...register('Montasje.N2_9.Resultat')} type='radio' name='Montasje.N2_9.Resultat' value='Ja' id='Montasje.N2_9.Resultat.ja' />

                    <label htmlFor='Montasje.N1_5.Resultat.nei'>Nei</label>
                    <input {...register('Montasje.N2_9.Resultat')} type='radio' name='Montasje.N2_9.Resultat' value='Nei' id='Montasje.N2_9.Resultat.nei' />
                </td>
                <td>
                    <input {...register('Montasje.N2_9.Dato')} type='date'  id='Montasje.N2_9.Dato'  />
                </td>
                <td>
                    <input {...register('Montasje.N2_9.Sign')} id='Montasje.N2_9.Sign' />
                </td>
                <td>
                    <textarea {...register('Montasje.N2_9.Anmerkning')} id='Montasje.N2_9.Anmerkning'  />
                </td>
            </tr>
        </>
    )
}

export default Montasje