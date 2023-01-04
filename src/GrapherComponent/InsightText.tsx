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
                D’après les données d’enquête,
                {' '}
                <span className='bold'>les ménages affirment avoir produit des quantités de déchets solides allant de moyennes à faibles</span>
                . Les méthodes les plus courantes de gestion des déchets au niveau de ces derniers consistent soit à les brûler, soit à les jeter dans une décharge vide ou encore à les recycler. Moins de la moitié des ménages interrogés trient leurs déchets chez eux en mettant à part les déchets organiques et les déchets inorganiques.
                <br />
                <br />
                Par ailleurs, la plupart des répondants
                {' '}
                <span className='bold'>attribuent la responsabilité de la gestion des déchets solides aux mairies</span>
                {' '}
                et considèrent le secteur public comme un gros producteur de déchets tandis que les ménages, les entreprises, les écoles, les centres de santé sont perçus comme des générateurs moyens.
                <br />
                <br />
                Les ménages signalent également des
                {' '}
                <span className='bold'>problèmes environnementaux liés à la gestion des déchets solides</span>
                . Par conséquent, la plupart des ménages perçoivent la population générale comme ayant un
                {' '}
                <span className='bold'>niveau de sensibilisation faible et un comportement qui ne facilite pas une bonne gestion des déchets solides</span>
                .
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
                <span className='bold'>only 20%</span>
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
                <span className='bold'>33.33%</span>
                {' '}
                des entreprises/organisations communautaires (OCB) interrogées
                {' '}
                <span className='bold'>affirment disposer de ressources suffisamment pour la collecte des déchets solides</span>
                {' '}
                , telles que les machines comme les camions d’ordures et à benne basculante. Les sources de financement les plus fréquemment utilisées par les entreprises sont les fonds/subventions, les dons, les crédits, entre autres. Alors que la plupart des entreprises/OCB offrent des services de collecte des déchets et de vente de déchets solides,
                {' '}
                <span className='bold'>seulement 20%</span>
                {' '}
                de ces entreprises interrogées
                {' '}
                <span className='bold'>offrent des services similaires pour les déchets organiques, les déchets plastiques, la ferraille et les déchets de papier/carton</span>
                . De plus, seulement la moitié des entreprises mentionnent l&apos;implication avec d&apos;autres parties prenants - telles que les mairies, les entreprises privées et les organisations communautaires - dans la gestion des déchets solides.
                <br />
                <br />
                Les entreprises perçoivent les ménages et les marchés privés comme des producteurs des niveaux plus élevés de déchets solides tandis que les entreprises, les écoles et les hôpitaux en sont considérés comme des producteurs de quantités faibles. Par ailleurs, la moitié des répondants confirment la participation d&apos;autres acteurs de la gestion des déchets, comme les mairies, les entreprises privées et les ONG. En outre, plus des deux tiers des entreprises interrogées détectent des
                {' '}
                <span className='bold'>cas récurrents de maladies liées aux déchets solides</span>
                {' '}
                et considèrent que le
                {' '}
                <span className='bold'>niveau d&apos;engagement et de sensibilisation de la populationn</span>
                {' '}
                par rapport à la gestion des déchets solides
                {' '}
                <span className='bold'>est faible</span>
                .

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
                La grande majorité des répondants déclarent que le financement des projets liés à la gestion des déchets provient de donateurs internationaux, de donateurs nationaux et de notables de la région.
                {' '}
                <span className='bold'>33.33%</span>
                {' '}
                des projets avaient des
                {' '}
                <span className='bold'>partenariats avec différentes parties prenantes</span>
                , le plus souvent des mairies, des entreprises privées, des organisations communautaires, d&apos;autres institutions étatiques et des ONG.
                <br />
                <br />
                Le partenariat avec le
                {' '}
                <span className='bold'>PNUD est très apprécié par les chefs de projet</span>
                ; toutefois, la qualité des partenariats avec les entreprises privées/organismes communautaires et les mairies est respectivement perçue comme moyenne et faible par les porteurs de projet. En ce qui concerne les types de déchets,
                {' '}
                <span className='bold'>le plastique est le plus produit suivi du papier/carton et des déchets agricoles</span>
                .
                <br />
                <br />
                30% des répondants affirment avoir détecté des
                {' '}
                <span className='bold'>cas récurrents de maladies liées aux déchets solides</span>
                , le plus souvent la diarrhée, les maladies de la peau, le paludisme et la typhoïde. De plus, 40% pensent qu&apos;il existe des problèmes environnementaux liés à la gestion des déchets solides tels que l&apos;obstruction et l&apos;insalubrité des réseaux routiers. Enfin, quatre répondants sur dix pensent que la population a un faible engagement et une faible sensibilisation à la gestion des déchets solides.
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
                . 75% of the personnel in health care facilities claim to have attended training sessions on biomedical waste management during their academic or professional journey.
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
                <span className='bold'>33.33%</span>
                {' '}
                des établissements de santé déclarent disposer d&apos;un
                {' '}
                <span className='bold'>budget dédié à la gestion des déchets biomédicaux</span>
                . 75% du personnel des établissements de santé déclarent avoir suivi des formations sur la gestion des déchets biomédicaux au cours de leur parcours scolaire ou professionnel.
                {' '}
                <span className='bold'>Bien que la quasi-totalité du personnel</span>
                {' '}
                déclare que les déchets biomédicaux sont importants et qu&apos;ils se disent conscients des risques associés à la manipulation des déchets biomédicaux,
                {' '}
                <span className='bold'>très peu</span>
                {' '}
                d&apos;entre eux
                {' '}
                <span className='bold'>ont accès à un manuel de consignes de gestion des déchets</span>
                {' '}
                dans leurs centres de santé.
                <br />
                <br />
                La plupart des établissements affirment avoir un ou des employés responsables de la gestion des déchets biomédicaux. Par ailleurs, certains ont détecté des
                {' '}
                <span className='bold'>cas récurrents de maladies liées à une mauvaise gestion des déchets biomédicaux</span>
                {' '}
                tandis que la plupart de ces centres trient leurs déchets en fonction de leur niveau de dangerosité. Seulement la moitié pensent avoir une méthode appropriée de collecte des déchets biomédicaux.
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
                Bien que la moitié des mairies enquêtées disposent d&apos;un service en charge de la gestion des déchets solides,
                {' '}
                <span className='bold'>seulement 20% dispose de matériels adéquats pour la collecte des déchets</span>
                {' '}
                et 3 sur 10 déclarent avoir un budget dédié à la gestion des déchets solides. De nombreuses mairies interrogées reconnaissent leur participation active à la collecte, au transport, au brûlage et à la décharge des déchets, avec
                {' '}
                <span className='bold'>un nombre limité de partenaires</span>
                {' '}
                contribuant à ces activités.
                <br />
                <br />
                Selon les mairies enquêtées, le niveau de production de déchets des marchés publics est élevé, les ménages étant des générateurs moyens, alors que les entreprises, écoles, hôpitaux sont des générateurs faibles. Plus de la moitié d&apos;entre eux affirment détecter des
                {' '}
                <span className='bold'>cas récurrents de maladies liées aux déchets solides</span>
                {' '}
                et la plupart mentionnent des problèmes environnementaux. Pourtant, les mairies perçoivent
                {' '}
                <span className='bold'>un niveau faible d&apos;engagement de la population</span>
                {' '}
                en matière de gestion des déchets solides.
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
