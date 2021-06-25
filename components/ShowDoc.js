import useSWR, { mutate } from 'swr';
import { FaTimes } from 'react-icons/fa'

const ShowDoc = ({ id }) => {

    // const id = router.query.id
    // const id = '301560426673472005'
    console.log(id)

    const { data: doc } = useSWR(
        `/api/getDoc/${id}`, 
        (url) => fetch(url).then((res) => res.json())
    )

    var str2bool = (value) => {
        if (value && typeof value === "string") {
             if (value.toLowerCase() === "ja") return true;
             if (value.toLowerCase() === "nei") return false;
        }
        return value;
    }

    return (
        <div>
            { doc != undefined ? (
            <> 
                <table className="nice"> 
                    <tbody>
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
                                <p><i>{doc.SkjemaNr}</i></p>
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
                                <p><i>{doc.Dato}</i></p>
                            </td>
                        </tr>  
                    </tbody> 
                </table>
                <table className='NormalCell'>
                    <thead>
                        <tr>
                            <td colSpan='2'>ID på åpning (Etasje/himmelretning/løpenr): {doc.IDåpning}</td>
                            <td colSpan='4'>ID på produsert vindu: {doc.IDprodvind} </td>
                        </tr>
                        <tr>
                            <th>pkt</th>
                            <th>Tekst</th>
                            <th>Resultat</th>
                            <th>Dato</th>
                            <th>Sign</th>
                            <th>Anmerkning</th>
                        </tr>
                    </thead>

                    <tbody>
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
                                {str2bool(doc.KjenteAvik.N1_0.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_0' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_0' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_0.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_0.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_0.Anmerkning}</p>
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
                                {str2bool(doc.KjenteAvik.N1_1.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_1' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_1' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_1.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_1.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_1.Anmerkning}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>1.2</p>
                            </td>
                            <td>
                                <p>Hvor i bygget er avviket:</p><br />
                                <p>ETG: {doc.KjenteAvik.N1_2.ETG}    Fasade: {doc.KjenteAvik.N1_2.Fasade}    Byggeel: {doc.KjenteAvik.N1_2.Byggeel}</p>
                            </td>
                            <td>
                                {str2bool(doc.KjenteAvik.N1_2.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_2' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_2' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_2.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_2.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_2.Anmerkning}</p>
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
                                {str2bool(doc.KjenteAvik.N1_3.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_3' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_3' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_3' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_3' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_3.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_3.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_3.Anmerkning}</p>
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
                                {str2bool(doc.KjenteAvik.N1_4.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_4' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_4' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_4' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_4' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_4.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_4.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_4.Anmerkning}</p>
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
                                {str2bool(doc.KjenteAvik.N1_5.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob1_5' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja1_5' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob1_5' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='Ja1_5' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_5.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_5.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.KjenteAvik.N1_5.Anmerkning}</p>
                            </td>
                        </tr>
                                    
                        <tr>
                            <td colSpan='6' className='HeadlineCell' >MONTASJE</td>
                        </tr>

                        <tr>
                            <td>
                                <p>2.0</p>
                            </td>
                            <td>
                                <p>Riktig "element"på rett sted: Type /ID-nr. kontrollert mot skjemategninger og krav.</p>
                            </td>
                            <td>
                                {str2bool(doc.Montasje.N2_0.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.2_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.2_0' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.2_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.2_0' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_0.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_0.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_0.Anmerkning}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>2.1</p>
                            </td>
                            <td>
                                <p>Innfesting utført iht. tegning, vinduet i lodd side vegs og inn/ut av planet? </p>
                            </td>
                            <td>
                                {str2bool(doc.Montasje.N2_1.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='Ja.N2_1' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_1' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_1.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_1.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_1.Anmerkning}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>2.2</p>
                            </td>
                            <td>
                                <p>Vinduet er plassert i åpning med omløpende spalt mellom 10 og 25 mm ? Angi største og minste spalt.</p>
                            </td>
                            <td>
                                {str2bool(doc.Montasje.N2_2.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_2' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_2' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_2.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_2.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_2.Anmerkning}</p>
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
                                {str2bool(doc.Montasje.N2_3.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_3' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_3' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_3' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_3' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_3.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_3.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_3.Anmerkning}</p>
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
                                {str2bool(doc.Montasje.N2_4.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_4' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_4' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_4' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_4' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_4.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_4.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_4.Anmerkning}</p>
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
                                <p>Målt: {doc.Montasje.N2_5.Målt}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_5.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_5.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_5.Anmerkning}</p>
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
                                {str2bool(doc.Montasje.N2_6.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_6' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_6' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_6' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_6' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_6.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_6.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_6.Anmerkning}</p>
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
                                {str2bool(doc.Montasje.N2_7.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_7' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_7' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_7' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_7' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_7.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_7.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_7.Anmerkning}</p>
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <p>2.8</p>
                            </td>
                            <td>
                                <p>Er sålebenkbeslag og beslag på bånnstokk montert med syrefaste skruer og med korrekte luftespalter? </p>
                            </td>
                            <td>
                                {str2bool(doc.Montasje.N2_8.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_8' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_8' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_8' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_8' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_8.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_8.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_8.Anmerkning}</p>
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
                                {str2bool(doc.Montasje.N2_9.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N2_9' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N2_9' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N2_9' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N2_9' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_9.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_9.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Montasje.N2_9.Anmerkning}</p>
                            </td>
                        </tr>
                        
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
                                {str2bool(doc.Solskjerming.N3_0.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N3_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N3_0' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N3_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N3_0' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_0.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_0.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_0.Anmerkning}</p>
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
                                {str2bool(doc.Solskjerming.N3_1.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N3_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N3_1' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N3_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N3_1' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_1.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_1.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_1.Anmerkning}</p>
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
                                {str2bool(doc.Solskjerming.N3_2.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N3_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N3_2' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N3_2' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N3_2' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_2.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_2.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.Solskjerming.N3_2.Anmerkning}</p>
                            </td>
                        </tr>
                        
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
                                {str2bool(doc.FeilSkader.N4_0.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N4_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N4_0' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N4_0' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N4_0' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_0.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_0.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_0.Anmerkning}</p>
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
                                {str2bool(doc.FeilSkader.N4_1.Resultat) == true ? (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled name='nob.N4_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled checked name='ja.N4_1' />
                                    </label>
                                </>
                                ) : (
                                <>
                                    <label>
                                        nei:
                                        <input type='checkbox' disabled checked name='nob.N4_1' /><br />
                                    </label>
                                    <label>
                                        ja:
                                        <input type='checkbox' disabled name='ja.N4_1' />
                                    </label>
                                </>
                                )}
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_1.Dato}</p>
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_1.Sign}</p>
                            </td>
                            <td>
                                <p>{doc.FeilSkader.N4_1.Anmerkning}</p>
                            </td>
                        </tr>
                        
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
                                <p>{doc.Avslutningsvis.N5_0.UtfTegn}</p>
                            </td>
                        </tr>
                        

                    </tbody>
                </table>
                <div style={{marginTop: '50px'}}>
                    <table>
                        <tbody className="tableBot">
                            <tr>
                                <td>
                                    <p><i>Prosjektnummer:</i></p>
                                </td>
                                <td>
                                    <p>{doc.Prosjektnummer}</p>
                                </td>
                                <td>
                                    <p><i>Prosjektleder:</i></p>  
                                </td>
                                <td>
                                    <p>{doc.ProsjekLeder}</p>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p><i>Prosjektnavn:</i></p>
                                </td>
                                <td>
                                    <p>{doc.ProsjektNavn}</p>
                                </td>
                                <td>
                                    <p><i>Byggeplassleder:</i></p>  
                                </td>
                                <td>
                                    <p>{doc.Byggeplassleder}</p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </>
            ) : (
                'Somthing went wrong'
            )}
        </div>
    )
}

export default ShowDoc
