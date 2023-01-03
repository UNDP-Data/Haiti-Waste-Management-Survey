import { useContext } from 'react';
import { CtxDataType } from '../Types';
import Context from '../Context/Context';
import '../style/selectStyle.css';

export const InsightText = () => {
  const {
    language,
    selectedSubjectType,
  } = useContext(Context) as CtxDataType;
  return (
    <p className='undp-typgraphy'>
      {
        selectedSubjectType === 'households'
          ? language === 'en'
            ? (
              <>
                <span className='bold'>Haitian households</span>
                {' '}
                believe to produce
                {' '}
                <span className='bold'>medium to low amounts of waste</span>
                , being burning it, throwing it into an empty landfill lot, and recycling the most common ways of waste management used by the households. Less than half of the surveyed households claim to sort solid waste into organic and inorganic at home.  Most respondents attribute the
                {' '}
                <span className='bold'>responsibility of solid waste management to town halls</span>
                {' '}
                and consider the public sector as the highest producer of waste while households enterprises, schools, health centers are perceived as medium generators. Households also report
                {' '}
                <span className='bold'>environmental problems related to solid waste management</span>
                . Yet, most households perceive the general population as having
                {' '}
                <span className='bold'>low awareness and low behavioral changes</span>
                {' '}
                in terms of solid waste management.
              </>
            )
            : (
              <>
                Les ménages haïtiens pensent produire des quantités moyennes à faibles de déchets, en les brûlant, en les jetant dans une décharge vide et en recyclant les moyens les plus courants de gestion des déchets utilisés par les ménages. Moins de la moitié des ménages interrogés déclarent trier les déchets solides en organiques et inorganiques à la maison. La plupart des répondants attribuent la responsabilité de la gestion des déchets solides aux mairies et considèrent le secteur public comme le plus gros producteur de déchets tandis que les ménages, les entreprises, les écoles, les centres de santé sont perçus comme des générateurs moyens. Les ménages signalent également des problèmes environnementaux liés à la gestion des déchets solides. Pourtant, la plupart des ménages perçoivent la population générale comme ayant une faible sensibilisation et de faibles changements de comportement en matière de gestion des déchets solides.
              </>
            )
          : null
      }
      {
        selectedSubjectType === 'enterprises'
          ? language === 'en'
            ? (
              <>
                <span className='bold'>Only 33.33%</span>
                {' '}
                of the surveyed enterprises/Community Based Organizations (CBOs)
                {' '}
                <span className='bold'>claim to have enough resources for solid waste collection</span>
                {' '}
                such as machinery like garbage and dump trucks. The most common financing sources used by enterprises are funds/grants, donations, credits, among others. While most enterprises/CBOs offer the waste collection services and sale of solid waste,
                {' '}
                <span className='bold'>only a fifth</span>
                {' '}
                of the surveyed enterprises
                {' '}
                <span className='bold'>offer similar services for organic waste, plastic waste, scrap metal, and paper/cardboard waste</span>
                . Additionally, only half of the enterprises mention the involvement with other actors - such as town halls, private companies, and community organizations - in solid waste management.
                <br />
                <br />
                Enterprises perceive households and private markets to produce higher levels of waste while enterprises, schools, and hospitals are regarded as producing low amounts of waste. Moreover, half of the respondents acclaim the participation of other actors in waste management, such as town halls, private companies, and NGOs. Over two thirds of the surveyed enterprises detect
                {' '}
                <span className='bold'>recurrent cases of solid-waste-related diseases</span>
                {' '}
                and consider the level of commitment and
                {' '}
                <span className='bold'>awareness of the population</span>
                {' '}
                in relation to solid waste management
                {' '}
                <span className='bold'>to be low</span>
                .
              </>
            )
            : (
              <>
                Seul un tiers des entreprises/organisations communautaires (OCB) interrogées affirment disposer de suffisamment de ressources pour la collecte des déchets solides tels que les machines telles que les poubelles et les camions à benne basculante. Les sources de financement les plus couramment utilisées par les entreprises sont les fonds/subventions, les dons, les crédits, entre autres. Alors que la plupart des entreprises/OCB offrent des services de collecte des déchets et de vente de déchets solides, seulement un cinquième des entreprises interrogées offrent des services similaires pour les déchets organiques, les déchets plastiques, la ferraille et les déchets de papier/carton. De plus, seulement la moitié des entreprises mentionnent l&apos;implication avec d&apos;autres acteurs - tels que les mairies, les entreprises privées et les organisations communautaires - dans la gestion des déchets solides.
                <br />
                <br />
                Les entreprises perçoivent les ménages et les marchés privés comme produisant des niveaux plus élevés de déchets tandis que les entreprises, les écoles et les hôpitaux sont considérés comme produisant de faibles quantités de déchets. Par ailleurs, la moitié des répondants saluent la participation d&apos;autres acteurs de la gestion des déchets, comme les mairies, les entreprises privées et les ONG. Plus des deux tiers des entreprises interrogées détectent des cas récurrents de maladies liées aux déchets solides et considèrent que le niveau d&apos;engagement et de sensibilisation de la population par rapport à la gestion des déchets solides est faible.
              </>
            )
          : null
      }
      {
        selectedSubjectType === 'projects'
          ? language === 'en'
            ? (
              <>
                The vast majority of respondents declare that funding for waste-management related projects comes from international donors, national donors, and notables of the area.
                {' '}
                <span className='bold'>33.33%</span>
                {' '}
                of the projects had
                {' '}
                <span className='bold'>partnerships with different stakeholders</span>
                , most commonly being town halls, private companies, community organizations, other state institutions, and NGOs.
                <br />
                <br />
                The partnership with
                {' '}
                <span className='bold'>UNDP is highly valued by the project managers</span>
                ; however, the quality of the partnerships with private companies/community organizations and town halls are perceived as medium and low by the project managers, respectively. In regards with the types of waste,
                {' '}
                <span className='bold'>plastic is the most produced followed by paper/cardboard and agricultural waste</span>
                .
                <br />
                <br />
                30% of the respondents allege having detected
                {' '}
                <span className='bold'>recurrent cases of solid-waste related diseases</span>
                , most commonly diarrhea, skin diseases, malaria, and typhoid. Moreover, 40% believe there to be environmental problems in regard to solid waste management such as obstruction and insalubrity of road networks. Lastly, four in ten respondents believe the population to have a low engagement and awareness of solid waste management.
              </>
            )
            : (
              <>
                La grande majorité des répondants déclarent que le financement des projets liés à la gestion des déchets provient de donateurs internationaux, de donateurs nationaux et de notables de la région. Un tiers des projets avaient des partenariats avec différentes parties prenantes, le plus souvent des mairies, des entreprises privées, des organisations communautaires, d&apos;autres institutions étatiques et des ONG.
                <br />
                <br />
                Le partenariat avec le PNUD est très apprécié par les chefs de projet; toutefois, la qualité des partenariats avec les entreprises privées/organismes communautaires et les mairies est respectivement perçue comme moyenne et faible par les porteurs de projet. En ce qui concerne les types de déchets, le plastique est le plus produit suivi du papier/carton et des déchets agricoles.
                <br />
                <br />
                Trente pour cent des répondants affirment avoir détecté des cas récurrents de maladies liées aux déchets solides, le plus souvent la diarrhée, les maladies de la peau, le paludisme et la typhoïde. De plus, 40% pensent qu&apos;il existe des problèmes environnementaux liés à la gestion des déchets solides tels que l&apos;obstruction et l&apos;insalubrité des réseaux routiers. Enfin, quatre répondants sur dix pensent que la population a un faible engagement et une faible sensibilisation à la gestion des déchets solides.
              </>
            )
          : null
      }
      {
        selectedSubjectType === 'healthFacilities'
          ? language === 'en'
            ? (
              <>
                <span className='bold'>33.33%</span>
                {' '}
                of health care establishments state having a
                {' '}
                <span className='bold'>dedicated budget for biomedical waste management</span>
                . Three fourths of the personnel in health care facilities claim to have attended training sessions on biomedical waste management during their academic or professional journey.
                {' '}
                <span className='bold'>Although almost all the staff</span>
                {' '}
                state that biomedical waste is important and they claim to be aware of the associated risks of the handling of biomedical waste,
                {' '}
                <span className='bold'>very few</span>
                {' '}
                of them declare
                {' '}
                <span className='bold'>having access to a waste management guideline manual</span>
                {' '}
                in their health care facilities.
                <br />
                <br />
                Most facilities affirm to have a responsible employee(s) for managing biomedical waste. Moreover, some claim to have detected
                {' '}
                <span className='bold'>recurrent cases of illnesses related to poor management of biomedical waste</span>
                {' '}
                and most facilities state to sort waste according to its level of danger. Only around half believe to have proper collection of biomedical waste methods for safety.
              </>
            )
            : (
              <>
                Un tiers des établissements de santé déclarent disposer d&apos;un budget dédié à la gestion des déchets biomédicaux. Les trois quarts du personnel des établissements de santé déclarent avoir suivi des formations sur la gestion des déchets biomédicaux au cours de leur parcours scolaire ou professionnel. Bien que la quasi-totalité du personnel déclare que les déchets biomédicaux sont importants et qu&apos;ils se disent conscients des risques associés à la manipulation des déchets biomédicaux, très peu d&apos;entre eux déclarent avoir accès à un manuel de consignes de gestion des déchets dans leurs établissements de santé.
                <br />
                <br />
                La plupart des établissements affirment avoir un ou des employés responsables de la gestion des déchets biomédicaux. Par ailleurs, certains affirment avoir détecté des cas récurrents de maladies liées à une mauvaise gestion des déchets biomédicaux et la plupart des établissements déclarent trier les déchets en fonction de leur niveau de dangerosité. Seulement environ la moitié pensent avoir une collecte appropriée des méthodes de collecte des déchets biomédicaux pour la sécurité.
              </>
            )
          : null
      }
      {
        selectedSubjectType === 'townHalls'
          ? language === 'en'
            ? (
              <>
                Despite half of the surveyed town halls having a department in charge of solid waste management,
                {' '}
                <span className='bold'>only 20% have adequate materials for waste collection</span>
                {' '}
                and 3 out of 10 declared having a dedicated budget to solid waste management. Many of the surveyed town halls claim participation in waste collection, transportation, burning, and landfill, with
                {' '}
                <span className='bold'>limited number of partners</span>
                {' '}
                contributing to these activities.
                <br />
                <br />
                According to the town halls surveyed, the level of waste generation of public markets is high, households being medium generators, and companies, schools, hospitals being low generators. Over half of them allege detecting
                {' '}
                <span className='bold'>recurrent cases of solid waste-related diseases</span>
                {' '}
                and most mention
                {' '}
                <span className='bold'>environmental problems</span>
                . Yet, town halls perceive a
                {' '}
                <span className='bold'>low level of commitment on behalf of the population</span>
                {' '}
                in terms of solid waste management.
              </>
            )
            : (
              <>
                Bien que la moitié des mairies enquêtées disposent d&apos;un service en charge de la gestion des déchets solides, seul un cinquième dispose de matériels adéquats pour la collecte des déchets et 3 sur 10 déclarent avoir un budget dédié à la gestion des déchets solides. De nombreuses mairies interrogées revendiquent une participation à la collecte, au transport, au brûlage et à la décharge des déchets, avec un nombre limité de partenaires contribuant à ces activités.
                <br />
                <br />
                Selon les mairies enquêtées, le niveau de production de déchets des marchés publics est élevé, les ménages étant des générateurs moyens, et les entreprises, écoles, hôpitaux étant des générateurs faibles. Plus de la moitié d&apos;entre eux affirment détecter des cas récurrents de maladies liées aux déchets solides et la plupart mentionnent des problèmes environnementaux. Pourtant, les mairies perçoivent un low niveau d&apos;engagement de la population en matière de gestion des déchets solides.
              </>
            )
          : null
      }
      {
        selectedSubjectType === 'dumpingSites'
          ? language === 'en'
            ? (
              <>
                Despite that more than 75% of the respondents surveyed admit
                {' '}
                <span className='bold'>town halls tolerate/recognize the landfill site</span>
                , only 25% state that the landfill site is under the responsibility of the town hall.  Many of the surveyed dumping sites claim the
                {' '}
                <span className='bold'>location of the landfill site to be near inhabited areas</span>
                {' '}
                and households, town halls, individuals, and private companies being the highest contributors to dumping waste.
                <br />
                <br />
                According to the dumping sites surveyed, 75% claim that
                {' '}
                <span className='bold'>solid waste is dumped on the site every day</span>
                . Many of them allege detecting
                {' '}
                <span className='bold'>solid waste-related diseases</span>
                {' '}
                such as skin diseases, malaria, typhoid, diarrhea, and vaginal infections among others. Additionally, many mention
                {' '}
                <span className='bold'>environmental problems</span>
                {' '}
                such as bad smell, spread of insects, unsanitary road networks, in addition to others. Yet, dumping sites perceive a low level of commitment on behalf of the population and town halls in terms of solid waste management.
              </>
            ) : (
              <>
                Bien que plus des 75% des répondants interrogés admettent que
                {' '}
                <span className='bold'>les mairies tolèrent/reconnaissent le site décharge</span>
                , seulement 25% déclarent que le site décharge est sous la responsabilité de la mairie. De nombreux sites de décharge étudiés affirment que
                {' '}
                <span className='bold'>l&apos;emplacement du site d&apos;enfouissement se trouve à proximité de zones habitées</span>
                {' '}
                et que les ménages, les mairies, les particuliers et les entreprises privées sont les principaux contributeurs au déversement de déchets.
                <br />
                <br />
                Selon les dépotoirs enquêtés, 75% affirment que des
                {' '}
                <span className='bold'>déchets solides sont déversés quotidiennement sur le site</span>
                . Beaucoup d&apos;entre eux affirment avoir détecté des
                {' '}
                <span className='bold'>maladies liées aux déchets solides</span>
                {' '}
                telles que les maladies de la peau, le paludisme, la typhoïde, la diarrhée et les infections vaginales, entre autres. De plus, beaucoup mentionnent des
                {' '}
                <span className='bold'>problèmes environnementauxs</span>
                {' '}
                tels que les mauvaises odeurs, la propagation des insectes, les réseaux routiers insalubres, en plus d&apos;autres. Pourtant, les décharges perçoivent un faible niveau d&apos;engagement de la part de la population et des mairies en matière de gestion des déchets solides.
              </>
            )
          : null
      }
    </p>
  );
};
