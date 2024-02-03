let planXML = `
<Plan object="FEFU">
  <Exit id="d1" name="Вход 1 в корпус D" floor="7" to="входа 1 в D" />
  <Exit id="d2" name="Вход 2 в корпус D" floor="2" to="входа 2 в D" />
 
  <Floor num="7">
    <Path start="d1" walls="no" dir="up">
      <Point name="пост охраны" to="поста охраны" />
      <Path rotate="right" walls="right">
        <Stairs id="stairs6" wall="left" to="лестницы" />
        <Room id="d738" wall="right" />
        <Joint to="перекрестка" />
        <Path rotate="left" walls="no">
          <Joint to="перехода" />
          <Path rotate="right" walls="left_right">
            <Stairs id="stairs8" wall="left" to="лестницы" />
            <Room id="d712" wall="left" />
            <Elevator id="elevators_5_6" to="лифта" wall="left" />
            <Room id="d711" wall="right" />
            <Room id="d710" wall="left" />
            <Room id="d713" wall="right" />
            <Room id="d709" wall="left" />
            <Room id="d714" wall="right" />
            <Toilet id="d715_718" wall="left" name="Туалет" to="туалета" />
            <Room id="d708" wall="right" />
            <Room id="d719" wall="left" />
            <Room id="d707" wall="right" />
            <Room id="d706" wall="right" />
            <Room id="d720" wall="left" />
            <Room id="d705" wall="right" />
            <Room id="d721" wall="left" />
            <Room id="d704" wall="right" />
            <Room id="d722" wall="left" />
            <Room id="d703" wall="right" />
            <Room id="d723" wall="left" />
            <Room id="d724" wall="left" />
            <Room id="d702" wall="right" />
            <Room id="d701" wall="right" />
            <Stairs id="stairs9" wall="left" to="лестницы" />
          </Path>
        </Path>             
        <Path rotate="forward" walls="left_right">
          <Elevator id="elevators_1_2" to="лифта" wall="left" />
          <Room id="d725" wall="left" />
          <Toilet id="d726_731" wall="left" name="Туалет" to="туалета" />
          <Room id="d732" wall="left" />
          <Room id="d733" wall="left" />
          <Room id="d734" wall="left" />
          <Room id="d735" wall="left" />
          <Room id="d736" wall="left" />
          <Room id="d737" wall="left" />
          <Joint to="угла" />
          <Path rotate="left">
            <Stairs id="stairs10" to="лестницы" />
          </Path>
        </Path>
      </Path>
      <Path walls="left_right" rotate="left">
        <Joint to="развилки" />
        <Path rotate="forward">
          <Room id="d751" wall="right" />
          <Elevator id="elevators_3_4" wall="right" />
          <Toilet id="d745_750" wall="right" name="Туалет" to="туалета" />
          <Room id="d744" wall="right" />
          <Room id="d743" wall="right" />
          <Room id="d742" wall="right" />
          <Room id="d741" wall="right" />
          <Room id="d740" wall="right" />
          <Room id="d739" wall="right" />
          <Stairs id="stairs4" wall="right" to="лестницы" />
        </Path>
        <Path rotate="right">
          <Point name="кафе" to="кафе" wall="right" />
          <Room id="d752" wall="left" />
          <Room id="d753" wall="left" />
          <Room id="d754" wall="left" />
          <Room id="d755" wall="left" />
          <Joint to="угла" />
          <Path rotate="left">
            <Stairs id="stairs3" wall="right" to="лестницы" />
            <Room id="d756" wall="left" />
            <Elevator id="elevators_7_8" wall="right" to="лифта" />
            <Room id="d757" wall="left" />
            <Room id="d758" wall="left" />
            <Toilet id="d774_777" wall="right" name="Туалет" to="туалета" />
            <Room id="d759" wall="left" />
            <Room id="d773" wall="right" />
            <Room id="d760" wall="left" />
            <Room id="d772" wall="right" />
            <Room id="d771" wall="right" />
            <Room id="d761" wall="left" />
            <Room id="d770" wall="right" />
            <Room id="d762" wall="left" />
            <Room id="d769" wall="right" />
            <Room id="d763" wall="left" />
            <Room id="d764" wall="left" />
            <Room id="d768" wall="right" />
            <Stairs id="stairs2" wall="right" to="лестницы" />
            <Room id="d765" wall="left" />
            <Room id="d766" wall="left" />
            <Room id="d767" wall="right" />
          </Path>
        </Path>
      </Path>
    </Path>
  </Floor>  

  <Floor num="9">
    <Point id="p1" name="площадка" to="площадки" />
    <Path start="p1" walls="left_right" dir="right">
      <Stairs id="stairs6" to="лестница" />
      <Room id="d931" wall="right" />
      <Room id="d930" wall="right" />
      <Elevator id="elevators_1_2" wall="left" to="лифта" />
      <Room id="d929" wall="right" />
      <Toilet id="d901_904" wall="left" name="Туалет" to="туалета" />
      <Room id="d928" wall="right" />
      <Room id="d927" wall="right" />
      <Room id="d905" wall="left" />
      <Room id="d926" wall="right" />
      <Room id="d906" wall="left" />
      <Room id="d925" wall="right" />
      <Room id="d907" wall="left" />
      <Room id="d908" wall="left" />
      <Room id="d924" wall="right" />
      <Room id="d909" wall="left" />
      <Room id="d910" wall="left" />
      <Room id="d923" wall="right" />
      <Room id="d911" wall="left" />
      <Room id="d912" wall="left" />
      <Room id="d922" wall="right" />
      <Room id="d913" wall="left" />
      <Room id="d921" wall="right" />
      <Room id="d914" wall="left" />
      <Room id="d920" wall="right" />
      <Room id="d915" wall="left" />
      <Room id="d919" wall="right" />
      <Room id="d918" wall="right" />
      <Room id="d916" wall="left" />
      <Room id="d917" wall="right" />
      <Stairs id="stairs10" to="лестницы" wall="left" />
    </Path>
    <Path start="p1" walls="left_right" dir="left">
      <Room id="d932" wall="left" />
      <Room id="d933" wall="left" />
      <Room id="d961" wall="right" />
      <Room id="d934" wall="left" />
      <Room id="d935" wall="left" />
      <Elevator id="elevators_3_4" wall="right" />
      <Room id="d936" wall="left" />
      <Toilet id="d957_960" wall="right" name="Туалет" to="туалета" />
      <Room id="d937" wall="left" />
      <Room id="d956" wall="right" />
      <Room id="d955" wall="right" />
      <Room id="d938" wall="left" />
      <Room id="d954" wall="right" />
      <Room id="d939" wall="left" />
      <Room id="d940" wall="left" />
      <Room id="d953" wall="right" />
      <Room id="d941" wall="left" />
      <Room id="d952" wall="right" />
      <Room id="d942" wall="left" />
      <Room id="d951" wall="right" />
      <Room id="d943" wall="left" />
      <Room id="d950" wall="right" />
      <Room id="d944" wall="left" />
      <Room id="d949" wall="right" />
      <Room id="d945" wall="left" />
      <Room id="d948" wall="right" />
      <Room id="d946" wall="left" />
      <Room id="d947" wall="left" />
      <Stairs id="stairs4" wall="right" to="лестницы" />       
    </Path>
  </Floor>  

  <Floor num="8">
    <Point id="p2" name="площадка" to="площадки" />
    <Path start="p2" walls="left_right" dir="right">
      <Stairs id="stairs6" to="лестница" />
      <Room id="d814" wall="right" />
      <Room id="d813" wall="right" />
      <Elevator id="elevators_1_2" wall="left" to="лифта" />
      <Toilet id="d802_805" wall="left" name="Туалет" to="туалета" />
      <Room id="d801" wall="left" />
      <Room id="d806" wall="left" />
      <Room id="d807" wall="left" />
      <Room id="d808" wall="left" />
      <Room id="d809" wall="left" />
      <Room id="d810" wall="left" />
      <Room id="d811" wall="left" />
      <Room id="d812" wall="left" />
      <Stairs id="stairs10" to="лестницы" wall="left" />      
    </Path>
    <Path start="p2" walls="left_right" dir="left">
      <Room id="d815" wall="left" />
      <Room id="d829" wall="right" />
      <Room id="d828" wall="right" />
      <Elevator id="elevators_3_4" wall="right" />
      <Toilet id="d822_827" wall="right" name="Туалет" to="туалета" />
      <Room id="d821" wall="right" />
      <Room id="d820" wall="right" />
      <Room id="d819" wall="right" />
      <Room id="d818" wall="right" />
      <Room id="d817" wall="right" />
      <Room id="d816" wall="right" />
      <Stairs id="stairs4" wall="right" to="лестницы" />       
    </Path>
  </Floor>  

  <Floor num="6">
    <Point id="p3" name="площадка" to="площадки" />
    <Path start="p3" walls="left_right" dir="right">
      <Stairs id="stairs6" to="лестница" />
      <Room id="d631" wall="right" />
      <Elevator id="elevators_1_2" wall="left" to="лифта" />
      <Toilet id="d613_616" wall="left" name="Туалет" to="туалета" />
      <Room id="d617" wall="left" />
      <Room id="d618" wall="left" />
      <Room id="d619" wall="left" />
      <Room id="d620" wall="left" />
      <Room id="d621" wall="left" />
      <Room id="d622" wall="left" />
      <Room id="d623" wall="left" />
      <Room id="d624" wall="left" />
      <Room id="d625" wall="left" />
      <Room id="d626" wall="left" />
      <Room id="d627" wall="left" />
      <Room id="d628" wall="left" />
      <Room id="d629" wall="left" />
      <Room id="d630" wall="left" />
      <Stairs id="stairs10" to="лестницы" wall="left" />      
    </Path>
    <Path start="p3" walls="left_right" dir="left">
      <Joint to="развилки" />
      <Path rotate="forward" walls="left_right">
        <Room id="d651" wall="right" />
        <Elevator id="elevators_3_4" wall="right" />
        <Toilet id="d647_650" wall="right" name="Туалет" to="туалета" />
        <Room id="d646" wall="right" />
        <Room id="d645" wall="right" />
        <Room id="d644" wall="right" />
        <Room id="d643" wall="right" />
        <Room id="d642" wall="right" />
        <Room id="d641" wall="right" />
        <Room id="d640" wall="right" />
        <Room id="d639" wall="right" />
        <Room id="d638" wall="right" />
        <Room id="d637" wall="right" />
        <Room id="d636" wall="right" />
        <Room id="d635" wall="right" />
        <Room id="d634" wall="right" />
        <Room id="d633" wall="right" />
        <Room id="d632" wall="right" />
        <Stairs id="stairs4" wall="right" to="лестницы" />
      </Path>
      <Path rotate="right" walls="left_right">
        <Room id="d652" wall="left" />
        <Room id="d653" wall="left" />
        <Room id="d654" wall="left" />
        <Joint to="перекрестка" />
        <Path rotate="right" walls="left">
          <Stairs id="stairs3" wall="left" to="лестницы" />
          <Joint to="перехода" />
          <Path rotate="forward" walls="left_right">
            <Stairs id="stairs8" wall="left" to="лестницы" />
            <Elevator id="elevators_5_6" to="лифта" wall="left" />
            <Room id="d612" wall="left" />
            <Room id="d611" wall="left" />
            <Toilet id="d606_609" wall="left" name="Туалет" to="туалета" />
            <Room id="d610" wall="left" />
            <Room id="d605" wall="left" />
            <Room id="d604" wall="left" />
            <Room id="d603" wall="left" />
            <Room id="d602" wall="left" />
            <Room id="d601" wall="left" />
            <Stairs id="stairs9" wall="left" to="лестницы" />           
          </Path>
        </Path>         
        <Path rotate="left" walls="left_right">
          <Room id="d666" wall="right" />
          <Elevator id="elevators_7_8" wall="right" to="лифта" />
          <Toilet id="d661_664" wall="right" name="Туалет" to="туалета" />
          <Room id="d660" wall="right" />
          <Room id="d665" wall="right" />
          <Room id="d659" wall="right" />
          <Room id="d658" wall="right" />
          <Room id="d657" wall="right" />
          <Room id="d656" wall="right" />
          <Room id="d656" wall="right" />
          <Stairs id="stairs2" wall="right" to="лестницы" />
          <Room id="d655" wall="right" />            
        </Path>
      </Path>
    </Path>
  </Floor>  

  <Floor num="5">
    <Point id="p4" name="площадка" to="площадки" />
    <Path start="p4" walls="left_right" dir="right">
      <Stairs id="stairs6" to="лестница" />
      <Room id="d526" wall="right" />
      <Elevator id="elevators_1_2" wall="left" to="лифта" />
      <Toilet id="d513_516" wall="left" name="Туалет" to="туалета" />
      <Room id="d517" wall="left" />
      <Room id="d518" wall="left" />
      <Room id="d519" wall="left" />
      <Room id="d520" wall="left" />
      <Room id="d521" wall="left" />
      <Room id="d522" wall="left" />
      <Room id="d523" wall="left" />
      <Room id="d524" wall="left" />
      <Room id="d525" wall="left" />
      <Stairs id="stairs10" wall="right" to="лестницы" />
    </Path>
    <Path start="p4" walls="left_right" dir="left">
      <Joint to="угла" />
      <Path rotate="forward" walls="left_right">
        <Room id="d540" wall="right" />
        <Elevator id="elevators_3_4" wall="right" />
        <Toilet id="d536_539" wall="right" name="Туалет" to="туалета" />
        <Room id="d535" wall="right" />
        <Room id="d534" wall="right" />
        <Room id="d533" wall="right" />
        <Room id="d532" wall="right" />
        <Room id="d531" wall="right" />
        <Room id="d530" wall="right" />
        <Room id="d529" wall="right" />
        <Room id="d528" wall="right" />
        <Room id="d527" wall="right" />
        <Stairs id="stairs4" wall="right" to="лестницы" />
      </Path>
      <Path rotate="right" walls="left_right">
        <Room id="d541" wall="left" />
        <Room id="d542" wall="left" />
        <Room id="d543" wall="left" />
        <Joint to="перекрестка" />
        <Path rotate="forward" walls="right">
          <Stairs id="stairs3" wall="right" to="лестницы" />
          <Joint to="перехода" />
          <Path rotate="forward" walls="left_right">
            <Room id="d557" wall="right" />
            <Joint to="развилки" />
            <Path rotate="left" walls="left_right">
              <Room id="d573" wall="right" />
              <Toilet id="d558_561" wall="left" name="Туалет" to="туалета" />
              <Room id="d572" wall="right" />
              <Room id="d571" wall="right" />
              <Room id="d562" wall="left" />
              <Room id="d570" wall="right" />
              <Room id="d563" wall="left" />
              <Room id="d569" wall="right" />
              <Room id="d564" wall="left" />
              <Room id="d565" wall="left" />
              <Room id="d568" wall="right" />
              <Room id="d566" wall="left" />
              <Elevator id="elevator_17" wall="right" />
              <Stairs id="stairs1" wall="right" to="лестницы" />
              <Room id="d567" wall="left" />
            </Path>
            <Path rotate="right" walls="left_right">
              <Room id="d574" wall="left" />
              <Stairs id="stairs5" wall="right" to="лестницы" />
              <Elevator id="elevator_9" wall="left" />
              <Joint to="двери" />
              <Path rotate="right" walls="left_right">
                <Room id="d589" wall="left" />
                <Stairs id="stairs8" wall="left" to="лестницы" />
                <Joint to="угла" />
                <Path rotate="left" walls="left_right">
                  <Elevator id="elevators_5_6" to="лифта" wall="left" />
                  <Room id="d512" wall="left" />
                  <Room id="d511" wall="left" />
                  <Toilet id="d506_509" wall="left" name="Туалет" to="туалета" />
                  <Room id="d510" wall="left" />
                  <Room id="d505" wall="left" />
                  <Room id="d504" wall="left" />
                  <Room id="d503" wall="left" />
                  <Room id="d502" wall="left" />
                  <Room id="d501" wall="left" />
                  <Stairs id="stairs9" wall="left" to="лестницы" />                    
                </Path>
              </Path>
              <Path rotate="forward" walls="left_right">
                <Room id="d585" wall="right" />
                <Toilet id="d586_587" wall="right" name="Туалет" to="туалета" />
                <Toilet id="d582_584" wall="right" name="Туалет" to="туалета" />
                <Room id="d581" wall="right" />
                <Room id="d580" wall="right" />
                <Room id="d579" wall="right" />
                <Room id="d578" wall="right" />
                <Room id="d577" wall="right" />
                <Room id="d576" wall="right" />
                <Room id="d575" wall="right" />
                <Stairs id="stairs7" wall="right" to="лестницы" />                
              </Path>                       
            </Path>
          </Path>        
        </Path>
        <Path rotate="left" walls="left_right">
          <Elevator id="elevators_7_8" wall="right" to="лифта" />
          <Room id="d556" wall="right" />
          <Toilet id="d551_554" wall="right" name="Туалет" to="туалета" />
          <Room id="d555" wall="right" />
          <Room id="d550" wall="right" />
          <Room id="d549" wall="right" />
          <Room id="d548" wall="right" />
          <Room id="d547" wall="right" />
          <Room id="d546" wall="right" />
          <Stairs id="stairs2" wall="right" to="лестницы" />
          <Room id="d544" wall="left" />
          <Room id="d545" wall="right" />          
        </Path>
      </Path>   
    </Path>
  </Floor>  

  <Floor num="4">
    <Point id="p5" name="площадка" to="площадки" />
    <Path start="p5" walls="left_right" dir="right">
      <Stairs id="stairs5" to="лестница" wall="right" />
      <Elevator id="elevator_9" wall="left" />
      <Joint to="развилки" />
      <Path rotate="forward" walls="left_right">
        <Room id="d457" wall="right" />
        <Room id="d458" wall="right" />
        <Room id="d459" wall="right" />
        <Toilet id="d454_456" wall="right" name="Туалет" to="туалета" />
        <Room id="d453" wall="right" />
        <Room id="d452" wall="right" />
        <Room id="d451" wall="right" />
        <Room id="d450" wall="right" />
        <Room id="d449" wall="right" />
        <Room id="d448" wall="right" />
        <Room id="d447" wall="right" />
        <Stairs id="stairs7" wall="right" to="лестницы" />                
      </Path>
      <Path rotate="right">
        <Room id="d460" wall="left" />
        <Room id="d461" wall="left" />
        <Joint to="двери" />
        <Path rotate="forward">
          <Stairs id="stairs8" wall="left" to="лестницы" />
          <Joint to="угла" />
          <Path rotate="left" walls="left_right">
            <Elevator id="elevators_5_6" to="лифта" wall="left" />
            <Room id="d411" wall="left" />
            <Room id="d410" wall="left" />
            <Toilet id="d406_409" wall="left" name="Туалет" to="туалета" />
            <Room id="d405" wall="left" />
            <Room id="d404" wall="left" />
            <Room id="d403" wall="left" />
            <Room id="d402" wall="left" />
            <Room id="d401" wall="left" />
            <Stairs id="stairs9" wall="left" to="лестницы" />                    
          </Path>
        </Path>
      </Path>
    </Path>
    <Path start="p5" walls="left_right" dir="left">
      <Room id="d446" wall="right" />
      <Room id="d426" wall="left" />
      <Room id="d427" wall="left" />
      <Room id="d445" wall="right" />
      <Toilet id="d428_431" wall="left" name="Туалет" to="туалета" />
      <Room id="d444" wall="right" />
      <Room id="d432" wall="left" />
      <Room id="d443" wall="right" />
      <Room id="d433" wall="left" />
      <Room id="d442" wall="right" />
      <Room id="d434" wall="left" />
      <Room id="d441" wall="right" />
      <Room id="d435" wall="left" />
      <Room id="d440" wall="right" />
      <Room id="d436" wall="left" />
      <Room id="d439" wall="right" />
      <Room id="d437" wall="left" />
      <Elevator id="elevator_17" wall="right" />
      <Stairs id="stairs1" wall="right" to="лестницы" />
      <Room id="d438" wall="left" />   
    </Path>

    <Point id="p6" name="площадка" to="площадки" />
    <Path start="p6" walls="left_right" dir="left">
      <Stairs id="stairs3" to="лестница" wall="right" />
      <Elevator id="elevators_7_8" wall="right" to="лифта" />
      <Toilet id="d422_425" wall="right" name="Туалет" to="туалета" />
      <Room id="d421" wall="right" />
      <Room id="d420" wall="right" />
      <Room id="d419" wall="right" />
      <Room id="d418" wall="right" />
      <Room id="d417" wall="right" />
      <Room id="d416" wall="right" />
      <Room id="d415" wall="right" />
      <Room id="d414" wall="right" />
      <Stairs id="stairs2" wall="right" to="лестницы" />
      <Room id="d413" wall="right" />
    </Path>
    <Path start="p6" walls="left_right" dir="down">
      <Room id="d412" wall="right" />      
    </Path>
  </Floor>  

  <Floor num="3">
    <Point id="u1" name="угол" to="угла" />
    <Path start="u1" walls="left_right" dir="left">      
      <Room id="d323" wall="right" />  
      <Elevator id="elevators_7_8" wall="right" to="лифта" />
      <Toilet id="d319_322" wall="right" name="Туалет" to="туалета" />
      <Room id="d318" wall="right" />
      <Room id="d317" wall="right" />
      <Room id="d316" wall="right" />
      <Room id="d315" wall="right" />
      <Room id="d314" wall="right" />
      <Room id="d313" wall="right" />
      <Stairs id="stairs2" wall="right" to="лестницы" />
    </Path>
    <Point id="p7" name="площадка" to="площадки" />
    <Path start="p7" walls="left_right" dir="right">
      <Stairs id="stairs5" to="лестница" wall="right" />
      <Elevator id="elevator_9" wall="left" />
      <Joint to="развилки" />
      <Path rotate="forward" walls="left_right">
        <Room id="d344" wall="right" />
        <Room id="d345" wall="right" />
        <Toilet id="d354_356" wall="right" name="Туалет" to="туалета" />
        <Room id="d346" wall="left" />
        <Room id="d353" wall="right" />
        <Room id="d352" wall="right" />
        <Room id="d347" wall="left" />
        <Room id="d351" wall="right" />
        <Room id="d350" wall="right" />
        <Room id="d349" wall="right" />
        <Room id="d348" wall="left" />
        <Stairs id="stairs7" wall="right" to="лестницы" />                
      </Path>
      <Path rotate="right">
        <Room id="d357" wall="left" />
        <Room id="d358" wall="left" />
        <Toilet id="d359" wall="right" to="туалета" />
        <Room id="d360" wall="left" />
        <Room id="d361" wall="left" />
        <Room id="d362" wall="left" />
        <Point name="закрытый вход" to="закрытого входа" wall="left" />
        <Joint to="угла" />
        <Path rotate="left" walls="left_right">
          <Elevator id="elevators_5_6" to="лифта" wall="left" />
          <Room id="d312" wall="left" />
          <Room id="d311" wall="left" />
          <Toilet id="d307_310" wall="left" name="Туалет" to="туалета" />
          <Room id="d306" wall="left" />
          <Room id="d305" wall="left" />
          <Room id="d304" wall="left" />
          <Room id="d303" wall="left" />
          <Room id="d302" wall="left" />
          <Room id="d301" wall="left" />
          <Stairs id="stairs9" wall="left" to="лестницы" />                              
        </Path>   
      </Path>
    </Path>
    <Path start="p7" walls="left_right" dir="left"> 
      <Room id="d343" wall="right" />
      <Room id="d324" wall="left" />
      <Room id="d325" wall="left" />
      <Room id="d342" wall="right" />
      <Toilet id="d326_329" wall="left" name="Туалет" to="туалета" />
      <Room id="d341" wall="right" />
      <Room id="d330" wall="left" />
      <Room id="d340" wall="right" />
      <Room id="d331" wall="left" />
      <Room id="d339" wall="right" />
      <Room id="d332" wall="left" />
      <Room id="d333" wall="left" />
      <Room id="d338" wall="right" />
      <Room id="d334" wall="left" />
      <Room id="d337" wall="right" />
      <Room id="d335" wall="left" />
      <Elevator id="elevator_17" wall="right" />
      <Stairs id="stairs1" wall="right" to="лестницы" />
      <Room id="d336" wall="left" /> 
    </Path>
  </Floor>  

  <Floor num="2">
    <Point id="p8" name="площадка" to="площадки" />
    <Path start="p8" walls="left_right" dir="right">
      <Stairs id="stairs5" to="лестница" wall="right" />
      <Room id="d201" wall="left" />
      <Elevator id="elevator_9" wall="left" />
      <Joint to="развилки" />
      <Path rotate="forward" walls="left_right">
        <Room id="d202" wall="left" />
        <Room id="d203" wall="left" />
        <Room id="d204" wall="left" />
        <Toilet id="d216_219" wall="right" name="Туалет" to="туалета" />
        <Room id="d205" wall="left" />
        <Room id="d206" wall="left" />
        <Joint to="коридора" />
        <Path rotate="left" walls="left_right">
          <Room id="d207" wall="left" />
          <Room id="d208" wall="right" />
        </Path>
        <Path rotate="forward" walls="left_right">
          <Room id="d209" wall="left" />
          <Room id="d210" wall="left" />          
          <Room id="d211" wall="left" />
          <Joint to="коридора" />
          <Path rotate="left">
            <Room id="d212" wall="right" />
          </Path>
          <Path rotate="forward">
            <Room id="d213" wall="left" />
            <Room id="d214" wall="left" />          
            <Room id="d215" wall="left" />            
          </Path>
        </Path>
      </Path>
    </Path>
    <Path start="d2" dir="down">
      <Point id="p8" name="площадка" to="площадки" />
    </Path>
    <Path start="p8" walls="left_right" dir="left"> 
      <Room id="d231" name="Гардероб" fav="1" wall="right" />
      <Room id="d220" wall="left" />
      <Room id="d230" wall="right" />
      <Room id="d229" wall="right" />
      <Toilet id="d221_224" wall="left" name="Туалет" to="туалета" />
      <Room id="d228" wall="right" />
      <Room id="d227" wall="right" />
      <Room id="d226" wall="right" />
      <Room id="d225" wall="right" />
      <Elevator id="elevator_17" wall="right" />
      <Stairs id="stairs1" wall="right" to="лестницы" />
    </Path>
  </Floor>  
</Plan>
`
