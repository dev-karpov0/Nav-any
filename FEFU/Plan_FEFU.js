let planXML = `
<Plan object="FEFU">
  <Exit id="d1" name="Вход 1 в корпус D" floor="7" to="входа 1 в D" />
 
  <Floor num="7">
    <Path start="d1" type="no_walls" dir="up">
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
          <Elevator id="elevators_1_2" to="лифта" />
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
</Plan>
`
