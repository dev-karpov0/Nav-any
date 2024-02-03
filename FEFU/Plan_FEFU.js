let planXML = `
<Plan object="FEFU">
  <Exit id="d1" name="Вход 1 в корпус D" floor="7" to="входа 1 в D" />
 
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
    <Path start="p1" walls="left_right" dir="right">
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
    <Path start="p1" walls="left_right" dir="left">
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

</Plan>
`
