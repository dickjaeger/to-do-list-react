import { Container } from '../../../common/styled';
import Section from '../../../common/Section';
import MyImage from './my-image.jpg';
import { Header, Image } from './styled';

const AuthorPage = () => (
  <Container>
    <Header>Wojciech Leksza</Header>
    <Image src={MyImage} alt="Wojciech Leksza" />
    <Section
      title="Trochę o mnie"
      body={<>
        <p>
          Cześć! Nazywam się <b>Wojciech Leksza</b>. Mam 26 lat i
          mieszkam w Raciborzu.
          Jestem człowiekiem otwartym na wiedzę i nie boję się
          wyzwań.
          Chętnie podejmuję się
          rozwiązań różnych problemów.
        </p>
      </>}
    />
    <Section
      title="Mój zawód"
      body={<>
        <h3>Spawanie</h3>
        <p>
          Zawodowo pracowałem głównie jako <span>ślusarz/spawacz</span>.
          Wraz z zespołem wykonywaliśmy konstrukcje stalowe dla dużych
          firm z <em>całego świata</em>, takich jak np. <i>Bayer </i>
          czy <i>Coca-Cola</i>.
        </p>
        <h3>Programowanie</h3>
        <p>
          Aktualnie skupiam się na nauce programowania. Od zawsze
          chiałem to robić. Wcześniej
          hobbystycznie rozwijałem swoje umiejętności w
          programowaniu sterowników PLC i mikrokontrolerów.
          Ostatecznie jednak wybrałem <i>Frontend</i>, dlatego
          dołączyłem do kursu <strong>YouCode</strong>.
        </p>
      </>}
    />
    <Section
      title="Moje Hobby"
      body={<>
        <h3>Elektronika i programowanie</h3>
        <p>
          Już od dzieciństwa najbardziej interesowały mnie 
          zabawki elektroniczne. Nie używałem ich jednak w 
          konwencjonalny sposób - większość takich zabawek 
          rozkładałem na czynniki i badałem ich działanie. 
          Później, w okresie szkolnym, uczyłem się samemu 
          tworzyć różnorakie konstrukcje. Gdy chodziłem do 
          gimnazjum, zakupiłem moją pierwszą ATMegę - tak 
          zaczęła się moja przygoda z programowaniem. 
          Aktualnie mało zajmuję się elektroniką (jedynie 
          drobne naprawy domowych sprzętów), bardziej 
          skupiam się na programowaniu, a dokładniej na
          tworzeniu aplikacji internetowych. 
        </p>
        <h3>Akwarystyka</h3>
        <p>
          Tym tematem zainteresowałem się, gdy mój tata kupił 
          nasze pierwsze akwarium. 
          Był to mały zbiornik, miał jedynie 60 litrów. Nie 
          przeszkadzało to jednak w kształtowaniu mojej pasji. 
          Teraz, kiedy mam już swoje mieszkanie, w końcu 
          mogłem pozwolić sobie na coś trochę większego - 
          200 litrów. Obecnie moje akwarium jest w fazie 
          dojrzewania i mam nadzieję, że równolegle z jego 
          dojrzewaniem, będą się rozwijały moje umiejętności 
          programowania. :)
        </p>
      </>}
    />
  </Container>
);


export default AuthorPage;
