import React from 'react'
import Navbar from './Navbar'
import { Jumbotron, ListGroup } from 'react-bootstrap';

export default function References() {
    return (
        <>
            <Navbar />
            <Jumbotron style={{backgroundColor: '#fff'}}>
                <h1>Bibliography</h1>
                <ul>
                    <li>ʿAbbās Iqbāl Āshtiyānī, Kitāb Āl-i Nawbakht (Mashhad: Āstān-i Quds-i Raḍawī, 1383/1963) </li>
                    <li>al-Afandī, al-Mīrzā ʿAbdullāh. al-Fawāʾid al-ṭarīfa, ed. al-Sayyid Aḥmad al-Ḥusaynī (Qum: Maktabat Āyatullāḥ al-Marʿashī, 1385sh/2006)</li>
                    <li>___. Riyāḍ al-ʿulamāʾ wa ḥiyāḍ al-fuḍalāʾ ed. al-Sayyid Aḥmad al-Ḥusaynī (Qum: Maktabat Āyatullāḥ al-Marʿashī, 1401/1980)</li>
                    <li>___.  Taʿlīqat amal al-āmil, ed. al-Sayyid Mahdī al-Rajāʾī (Qum: Maktabat Āyatullāḥ al-Marʿashī, 1410/1989) </li>
                    <li>al-ʿAlawī, ʿAlī b. Muḥammad. al-Majdī fī ansāb al-Ṭālibiyyīn, eds. Aḥmad al-Mahdawī al-Dāmighānī and Maḥmūd al-Marʿashī (Qum: Maktabat Āyatullāh Marʿashī Najafī, 1409/1988)</li>
                    <li>al-Amīn al-ʿĀmilī, Muḥsin b. ʿAbd al-Karīm. Aʿyān al-Shīʿa (Beirut: Dār al-Taʿāruf li al-Maṭbūʿāt, 1403/1983) </li>
                    <li>al-Baḥrānī, Yūsuf. Luʾluʾat al-baḥrayn fī al-ijāzāt wa tarājim rijāl al-ḥadīth, ed. al-Sayyid Muḥmmad Ṣādiq Āl Baḥr al-ʿulūm, (Najaf: Maṭbaʿt al-Nuʿmān, 1386/1966) </li>
                    <li>al-Bilādī, ʿAlī b. al-Ḥasan b. ʿAlī b. Sulaymān. Anwār al-badrayn fī tarājim ʿulamāʾ al-Qaṭīf wa al-Iḥsāʾ wa al-Baḥrayn, ed. Muḥammad ʿAlī Muḥammad Riḍā al-Ṭabasī (Najaf: Maṭbaʿt al-Nuʿmān, 1377/1958) </li>
                    <li>al-Ghaḍāʾirī, Aḥmad b. Ḥusayn. al-Rijāl, ed. Muḥammad Riḍā Ḥusaynī (Qum: Dār al-Ḥadīth, 1364 sh/ 1985) </li>
                    <li>Ḥājī Khalīfa, Muṣtafa b. ʿAbdullāh. Kashf al-ẓunūn (Beirut: Dār Iḥyāʾ al-Turāth al-ʿArabī, 1993) </li>
                    <li>al-Ḥillī, al-Ḥasan b. ʿAlī b. Dāwūd. Rijāl Ibn Dāwūd (Tehran: Intishārāt-i Dānishgāh-i Tihrān, 1383/1963) </li>
                    <li>al-Ḥillī, Ḥasan b. Yusūf. Khulāṣat al-aqwāl fī maʿrifat al-rijāl, ed. al-Shaykh Jawād al-Qayyūmī (Qum: Nashr al-Faqāha, 1431/2009) </li>
                    <li>Ḥirz al-Dīn, Muḥammad. Maʿārif al-rijāl fī tarājim al-ʿulamāʾ wa al-udabāʾ (Qum: Manshūrāt Kitābkhana-i Āyatullāḥ al-ʿudhmā al-Marʿashī al-Najafī, 1365/1945)</li>
                    <li>al-Ḥurr al-ʿĀmilī, Muḥammad b. al-Ḥasan. Amal al-āmil fī tarājim ʿulamāʾ Jabal ʿĀmil, ed. al-Sayyid Aḥmad al-Ḥusaynī (Baghdad: Maktabat al-Andalus, 1385/1965)</li>
                    <li>al-Ḥusaynī al-ʿĀmilī al-Karakī, Muḥammad Shafīʾ b. Bahāʾ al-Dīn. Maḥāfil al-muʾminīn fi dhayl majālis al-muʾminīn, eds. Ibrāhīm ʿArabpūr and Nūrullāh b. Sharaf al-Dīn al-Shūshtarī (Mashhad: Āstān-i Quds-i Raḍawī, 1383/2004)</li>
                    <li>al-Ḥusaynī, al-Sayyid Aḥmad Tarājim al-rijāl (Qum: Dalīl-i mā, 1422/2002)</li>
                    <li>Ibn ʿAnba, Aḥmad b. ʿAlī al-Ḥusaynī. ʿUmdat al-ṭālib fī ansāb Āl Abī Ṭālib, ed. Muḥammad Ḥasan Āl Ṭāliqānī (Najaf: al-Maṭbaʿa al-Ḥaydariyya, 1380/1961)</li>
                    <li>Ibn Bābawayh al-Qummī, al-Shaykh Muntajab al-Dīn ʿAlī. al-Fihrist: Fihrist ʿulamāʾ al-Shīʿa wa muṣannifīhim, ed. al-Sayyid Jalāl al-Dīn Muḥaddith Urmawī (Qum: Manshūrāt Kitābkhana-i Āyatullāḥ al-ʿudhmā al-Marʿashī al-Najafī, 1408/1987)</li>
                    <li>Ibn al-Nadīm, Muḥammad b. Isḥāq. Kitāb al-fihrist, ed. Ayman Fuʾād Sayyīd (London: Muʾassasat al-Furqān li al-Turāth al-Islāmī, 1430/2009)</li>
                    <li>Ibn Shahrāshūb, Muḥammad b. ʿAlī. Kitāb maʿālim al-ʿulamāʾ fī fihrist kutub al-Shīʿa wa-asmāʾ al-muṣannifīn minhum qadīman wa-ḥadīthan: tatimmat kitāb al-fihrist li al-Shaykh Abī Jaʿfar al-Ṭūsī, ed. ʿAbbās Iqbāl Āshtiyānī (Tehran: Maṭbaʿat Fardīn, 1934)</li>
                    <li>Ibn Zuhra al-Ḥusaynī, Tāj al-Dīn b. Muḥammad b. Ḥamza. Ghāyat al-ikhtiṣār fī byūtāt al-ʿAlawiyya al-maḥfūẓa min al-ghubār, ed. al-Sayyid Muḥmmad Ṣādiq Āl Baḥr al-ʿulūm (Najaf: al-Maṭbaʿa al-Ḥaydariyya, 1382/1962)</li>
                    <li>al-Iṣfahānī, Abū al-Faraj. Maqātil al-ṭālibiyyīn, ed. Kāẓim al-Muẓaffar (Najaf: Manshūrāt al-Maktaba al-Ḥaydariyya wa Maṭbaʿatuhā, 1385/1965)</li>
                    <li>al-Jazāʾirī, al-Sayyid ʿAbdullāḥ b. Nūr al-Dīn. al-Ijāza al-kabīra, ed. Muḥammad al-Samāmī al-Ḥāʾirī (Manshūrāt Kitābkhana-i Āyatullāḥ al-ʿudhmā al-Marʿashī al-Najafī, 1409/1988)</li>
                    <li>al-Kashshī, Muḥammad b. ʿUmar. Rijāl al-Kashshī, ed. Ḥasan Muṣtafawī (Mashhad: Intishārāt-i Dānishgāh-i Mashhad, 1348 sh/1969)</li>
                    <li>Kohlberg, Etan. A medieval Muslim scholar at work: Ibn Ṭāwūs and his library (Leiden: Brill, 1992)</li>
                    <li>al-Khūʾī, Abū al-Qāsim. Muʿjam rijāl al-ḥadīth (Qum: Markaz-i Nashr-i Āthār-i Shiʿa, 1410/1989)</li>
                    <li>al-Khūʾī, Muḥammad Amīn al-Imāmī. Mirʾāt al-sharq, ed. ʿAlī Ṣadrāʾi al-Khūʾī (Qum: Maktabat Āyatullāḥ al-Marʿashī, 1427/2006)</li>
                    <li>al-Khwānsārī, Muḥammad Bāqir. Rawḍāt al-jannāt fī aḥwāl al-ʿulamāʾ wa al-sādāt (Tehran: Maṭbaʿat al-Ḥaydariyya, 1390/1970)</li>
                    <li>al-Madanī, al-Sayyid ʿAlī Khān. al-Darajāt al-rafīʿa fī ṭabaqāt al-Shīʿa, ed. ed. al-Sayyid Muḥmmad Ṣādiq Āl Baḥr al-ʿulūm (Qum: Manshūrāt Maktabat Baṣīratī, 1397/1977)</li>
                    <li>___. Sulāfat al-ʿasr fī maḥāsin al-shuʿrāʾ bi kulli miṣr (Tehran: al-Maktaba al-Murtaḍawiyya li iḥyāʾ al-āthār al-Jaʿfariyya, 1380sh/2001)</li>
                    <li>Maghniyya, Muḥammad Jawād. Maʿ ʿulamāʾ al-Najaf al-Ashraf (Beirut: Dār Maktabat al-Ḥilal; Beirut: Dār al-Jawād, 1992)</li>
                    <li>al-Maḥallātī, Dhabīḥullāh. Rayāḥīn al-sharīʿa (Tehran: Dār al-Kutub al-Islāmiyya, 1411/1990)</li>
                    <li>al-Māmaqānī, ʿAbdullāh. Tanqīḥ al-maqāl fī ʿilm al-rijāl (Qum: Muʾassasat Āl al-Bayt li iḥyāʾ al-turāth, 1423/2002)</li>
                    <li>Modarressi, Hossein. Tradition and Survival: A Bibliographical Survey of Early Shīʿite Literature (Oxford: Oneworld, 2003)</li>
                    <li>Mudarris, Mīrzā Muḥammad ʿAlī. Rayḥānat al-adab fi tarājim al-maʿrūfīn bi al-kunya wa al-laqab ya kunā wa alqāb, ed. ʿAlī Asghar Mudarris (Tehran: Intishārāt-i Khayyām, 1369sh/1991) </li>
                    <li>al-Najāshī, Aḥmad b. ʿAlī. Rījal al-Najāshi, ed. Mūsā al-Shubayrī al-Zanjānī (Qum: Muʾassasat al-Nashr al-Islāmī al-Tābiʿa li Jāmiʿat al-Mudarrisīn, 1407/1986)</li>
                    <li>al-Qazwīnī, al-Shaykh ʿAbd al-Nabī. Tatmīm amal al-āmil, ed. al-Sayyid Aḥmad al-Ḥusaynī (Qum: Maktabat Āyatullāḥ al-Marʿashī, 1407/1986)</li>
                    <li>al-Qummī, al-Sahykh ʿAbbās. al-Fawāʾid al-Raḍawiyya (Qum: Bustān-i Kitāb, 1427/2006)</li>
                    <li>___. Hadiyyat al-aḥbāb fī dhikr al-maʿrūfīn bi al-kunā wa al-alqāb wa al-ansāb (Tehran: Kitābkhāna-i Ṣadūq, 1421/2000)</li>
                    <li>___. al-Kunā wa al-alqāb (Tehran: Maktaba Ṣadr, 1397/1976)</li>
                    <li>___. Tuḥfat al-aḥbāb fī nawādir āthār al-aṣḥāb (Tehran: Dār al-Kutub al-Islāmiyya, 1411/1990)</li>
                    <li>al-Rawḍātī, al-Sayyid Muḥammad ʿAlī. Takmilat ṭabaqāt aʿlām al-Shīʾa, ed. Muḥammad Barkat (Tehran: Maktabat, Matḥaf wa Markaz Wathāʾiq Majlis al-Shūra al-Islāmī, 1391sh/2012)</li>
                    <li>al-Rāzī, al-Shaykh Muḥammad Sharīf. Ganjīna-i dānishmandān (Tehran: Kitābfurūshī Islāmiyyeh, 1393sh/1973)</li>
                    <li>al-Ṣadr, al-Sayyid Ḥasan. Taʾsīs al-Shīʿa li ʿulūm al-Islām (Qum: Aʿlamī, 1375sh/1996)</li>
                    <li>Ṣāʾib ʿAbd al-Ḥamīd, Muʿjam muʾarrikhī al-Shīʿa, (Qum: Muʾassasat Dāʾirat Maʿārif al-Fiqh al-Islāmī, 1424/2003)</li>
                    <li>Sezgin, Fuat. Tārīkh al-turāth al-ʿArabī, trs. Maḥmūd Fahmī Ḥijāzī et al. (Riyadh: Jāmiʿat al-Imām Muḥammad b. Saʿūd al-Islāmiyya, 1411/1991)</li>
                    <li>Subḥānī Tabrīzī, Jaʿfar. Mawsūʿat ṭabaqāt al-fuqahāʾ (Qum: Muʾassasat al-Imām al-ṣādiq, 1418/1997)</li>
                    <li>al-Ṭabāṭabāʾī, ʿAbd al-ʿAzīz. Muʿjam aʿlām al-Shīʿa (Qum: Muʾassasat Āl al-Bayt li Iḥyāʾ al-turāth, 1417/1996)</li>
                    <li>al-Tafrishī, Mīr Muṣṭafā. Naqd al-rijāl (Qum: Muʾassasat Āl al-Bayt li iḥyāʾ al-turāth, 1418/1997)</li>
                    <li>al-Ṭihrānī, Āghā Buzurg. al-Dharīʿa (Beirut: Dār al-Aḍwāʾ, 1403/1983)</li>
                    <li>___. Ṭabaqāt aʿlām al-Shīʿa (Beirut: Dār Iḥyāʾ al-turāth al-ʿArabī, 1430/2009)</li>
                    <li>al-Tunikābunī, Muḥammad b. Sulaymān. Qiṣas al-ʿulamāʾ (Tehran: Shirkat Intishārāt-i ʿIlmī wa Farhangī, 1389sh/2010)</li>
                    <li>al-Tunikābunī, Muḥammad b. Sulaymān. Tadhkirat al-ʿulamāʾ (Mashhad: Āstān-i Quds-i Raḍawī, 1372sh/1993)</li>
                    <li>al-Ṭūsī, Muḥammad b. Ḥasan. al-Fihrist: fīhī mā yazīdu ʿalā tisʿ miʾat ism min al-muṣannifin wa huwa aḥad al-kutub al-arbaʿa al-muʿawwal ʿalayha fī al-rijāl, ed. Muḥammad Ṣādiq Āl Baḥr al-ʿulūm (Najaf: al-Maktaba al-Murtaḍawiyya wa Maṭbaʿuhā, n.d.)</li>
                    <li>___. Fihrist kutub al-Shīʿa wa uṣūluhum wa asmāʾ al-muṣannifīn wa aṣḥāb al-uṣūl, ed. ʿAbd al-ʿAzīz al-Ṭabāṭabāʾī (Qum: Maktabat al-Muḥaqqiq al-Ṭabāṭabāʾī, 1420/1999)</li>
                    <li>al-Tustarī, Muḥammad Taqī. Qāmūs al-rijāl (Qum: Muʾassasat al-Nashr al-Islāmī, 1419/1998)</li>
                    <li>al-Zunūzī, Muḥammad Ḥasan b. ʿAbd al-Rasūl al-Ḥusaynī. Riyāḍ al-janna min al-rawḍa al-rābiʿa ed. ʿAlī Rafīʿī (Qum: Maktabat Āyatullāh Marʿashī Najafī, 1370sh/1991)</li>
                    <li>al-Zurārī, Abū Ghālib. Risālat Abī Ghālib al-Zurārī (Qum: Intishārāt-i Daftar-i Tablighāt, 1411/1990)</li>
                </ul>
                <p>Digital Reference and Encyclopaedia:</p>
                <ListGroup  style={{width: 'max-content', }}>
                    <ListGroup.Item><a href="http://en.wikishia.net/view/Main_Page">http://en.wikishia.net/view/Main_Page</a></ListGroup.Item>
                    <ListGroup.Item>Encyclopaedia of Islam, 1st, 2nd and 3rd editions</ListGroup.Item>
                    <ListGroup.Item>Dāʿirat al-maʿārif-i buzurg-i Islāmī </ListGroup.Item>
                    <ListGroup.Item>Dānishnāme-i jahān-i Islām</ListGroup.Item>
                </ListGroup>
            </Jumbotron>
        </>
    )
}
