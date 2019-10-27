import React from 'react'
import Navbar from './Navbar'
import { Jumbotron } from 'react-bootstrap';
import './component-styles.css'

export default function Introduction() {
    return (
        <>
            <Navbar />
            <Jumbotron style={{backgroundColor: '#fff'}}>
                <h1>Introduction to Shii Dates</h1>
                <p>This database is a result of my interest in studying Shiʿi generations of scholars (ṭabaqāt lit. layers) which record their biographical information arranged in a specific order. Over a period of years, I collected and arranged, for my personal reference, a work-in-progress list of Shiʿite scholars spanning fourteen centuries arranging them in a chronological order of the year of their death. I had two primary aims: first, to acquaint myself with the senior and contemporary colleagues of a given scholar and second, to examine the intellectual milieu in which a particular scholar was trained to further decipher what informed her thoughts, in which discussions she engaged and who were her potential interlocuters? This collection has been a point of reference for my various research works. Hoping that it shall benefit others too, I am making it accessible for my colleagues. A special thanks to Professor Robert Gleave for sponsoring this venture through <a target="_blank" href="http://www.lawalisi.eu">LAWALISI</a>  project. </p>
                <p>At the outset, let me emphasis on what to expect and what not to expect from this project.</p>
                <ul>
                    <li>This database is a chronologically arranged list of Shiʿite scholars who have contributed to the advancement of the Shiʿi thoughts throughout the centuries. This project does not engage in recording their biographies and literary and scholarly contributions. The visitor of this website is assumed to be a researcher who is either familiar with the works produced by these scholars or, at least, possesses adequate skills and sources to refer to the bibliographical and biobibliographical works. At this stage, I can only wish that a comprehensive survey of Shiʿi scholarly contributions in a European language -likes of that which is researched by Etan Kohlberg (Medieval Muslim Scholar at Work: Ibn Ṭāwūs and his Library) and Hossein Modarressi (Tradition and Survival: A Bibliographical Survey of Early Shīʿite Literature) - is documented in near future. </li>
                    <li>This project does not provide the list of Zaydi and Ismaili Shiʿite scholars nor it offers the names of Sunni scholars which should have been extremely significant to examine the inter-sectarian discourses and debates. This is left for another project and time. Therefore, the word ‘Shiʿi’ in this context refers to the ‘Imāmī’ or ‘Twelver’ Shiʿites.</li>
                    <li>The list is not exhaustive, and I hope to keep populating the database in every three-month time. </li>
                    <li>The list also records the dates of the death of Shiʿite Imams, major political events and ruling period of different caliphates, empires, dynasties and movements to examine the political milieu in which scholars were residing. The list also covers names of some Shiʿite individuals who have contributed to Shiʿi cause in general, though did not necessarily participate in the intellectual tradition of Shiʿi thoughts. </li>
                    <li>The references for the exact dates of the death is not recorded. Those researching on the biography of individual scholars are strongly recommended to refer to the primary sources for often these dates have alternative records.</li>
                    <li>For the conversion of the dates from Hijrī to Gregorian calendar, I have consulted the online software designed by the Institute of Oriental Studies of Zurich University. <a target="_blank" href="http://www.muslimphilosophy.com/ip/hijri.htm.">http://www.muslimphilosophy.com/ip/hijri.htm.</a> Where the precise date and month of the death is not recorded, I have converted it based on the first day of Muḥarram. Occasionally, I have highlighted the differences of the dates in a single entry. Though the records of the birthdates of these scholars are significant and relevant for they contribute to the overall understanding of the intellectual history of Shiʿi thought, I have not included in this database due to their inaccessibility from the sources available to us. </li>
                    <li>The arrangement of the list of scholars in a specific century is based on Hijrī calendar. Though the Gregorian centuries are recorded with (/) in the headings, there are occasional cases where the entry do not match with the heading. For instance, Muḥammad Mahdī b. Abī Dharr al-Fāḍil al-Narāqī, al-Muḥaqqiq al-Narāqī (d. 1209/1795) is listed in Thirteenth/Nineteenth Century whereas, technically al-Muḥaqqiq al-Narāqī died towards the end of the Eighteenth Century. </li>
                    <li>In the interest of consistency, the transliteration for the names is Arabicised, even for the Persian names. For instance, Sayyid is converted to al-Sayyid and Bārfurūsh is converted to al-Bārfurūshī. </li>
                    <li>The list encompasses Shiʿite scholars from Bahrain, Indian subcontinent, Iraq, Iran, Kuwait, Lebanon, Syria, amongst few other regions without making any distinction of their Akhbārī, Uṣūlī, Shaykhī or any other doctrinal or jurisprudential tendencies. There might be scholars whose are perceived to be Sunnis or their Shiʿi adherence is questionable. I have included them owning the fact that they have contributed and participated in the Shiʿi intellectual tradition. </li>
                </ul>
                <p>I look forward to reading your comments, feedback and, most importantly, corrections via shiidates@shiidates.net.</p>
                <p className="introSignature">Kumail Rajani</p>
                <p className="introSignature">Research Fellow</p>
                <p className="introSignature">Institute of Arab and Islamic Studies</p>
                <p className="introSignature">University of Exeter</p>
                <p className="introSignature">Stocker Road, Exeter, EX4 4ND.</p>
                <p className="introSignature">Law, Authority and Learning in Imami Shiʿite Islam: <a target="_blank" href="http://www.lawalisi.eu">www.lawalisi.eu</a></p>
            </Jumbotron>
        </>
    )
}
