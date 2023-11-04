let planXML = `
<Plan name="VVSU">
  <Exit id="2" floor="3" name="Вход 2" />
  <Exit id="1" floor="1" name="Вход 1" />

  <Floor num="3">
    <Path start="2" walls="left_right" dir="right">
      <Joint to="поворота на Андеграунд" />
      <Path rotate="left" walls="no">
        <Room name="Андеграунд" to="Андеграунда" />
      </Path>
      <Path rotate="forward" walls="left_right">
        <Room name="Кофейня" wall="left" />
        <Door />
        <Joint name="Турникет" to="турникета" />
        <Path rotate="left" walls="left">
          <Joint to="угла" />
          <Path rotate="right" walls="left">
            <Room name="Лестница" to="лестницы" wall="left" />
            <Room name="Буфет" to="буфета" wall="left" />
            <Room name="Голубиная падь" to="Голубиной пади" wall="left" />
            <Joint to="развилки" />
            <Path rotate="left" walls="left_right">
              <Joint to="поворота направо" />
              <Path rotate="right">                
                <Joint to="развилки" />
                <Path rotate="right">
                  <Point id="corner2" />
                </Path>
                <Path rotate="forward">
                  <Room wall="left" id="1306" name="Мужской туалет" to="мужского туалета" />
                  <Room wall="left" id="1308" name="Женский туалет" to="женского туалета" />
                  <Joint to="перехода в 4 корпус" />
                  <Path rotate="forward">
                    <Room wall="right" name="Блинная" />
                    <Door name="Кафедра маркетинга и торговли" to="кафедры маркетинга и торговли" />
                    <Path rotate="forward" walls="left_right">
                      <Room id="4301" wall="right" />
                      <Room id="4303" wall="right" />
                      <Room id="4305" wall="right" />
                      <Room id="4302" wall="right" />
                      <Room id="4307" wall="right" />
                      <Room id="4309" wall="right" />
                      <Room id="4304" wall="right" />
                      <Room id="4306" wall="right" />
                      <Joint to="развилки" />
                      <Path rotate="forward">
                        <Room id="4311" wall="right" />
                        <Room id="4313" wall="right" />
                        <Room id="4315" wall="right" />
                      </Path>
                      <Path rotate="left">
                        <Joint to="развилки" />
                        <Path rotate="right">
                          <Stairs id="stairs2" />
                        </Path>
                        <Path rotate="left">
                          <Room wall="left" id="4302" />
                        </Path>
                      </Path>
                    </Path>
                  </Path>
                </Path>
              </Path>
              <Path rotate="forward">
                <Room name="Столовая" to="столовой" wall="left" />  
                <Joint to="угла" />
                <Path rotate="right" walls="left_right">
                  <Room name="Студотряды" to="студотрядов" wall="right" />
                  <Stairs id="stairs1" wall="left" />
                </Path>
              </Path>
            </Path>
            <Path rotate="right" wall="left">
              <!-- переход через длинный коридор -->        
            </Path>
          </Path>
        </Path>        
      </Path>
    </Path>
  </Floor>


  <Floor num="1">
    <Path start="1" walls="right" dir="up">
      <Joint name="Турникет" to="турникета" />
      <Path rotate="forward" walls="right">
        <Room wall="right" name="Лотос" to="Лотоса" />
      </Path>
      <Path rotate="left" walls="right">
        <Room wall="right" name="Гардероб" to="гардероба" />
        <Room wall="right" id="1140" />
        <Room wall="left" id="1131" />
        <Room wall="left" id="1129" />
        <Room wall="left" id="1127" />
        <Room wall="left" id="1125" />
        <Room wall="right" id="1132" />
        <Room wall="right" id="1130" />
        <Room wall="left" id="1123" />
        <Room wall="right" id="1128" />
        <Room wall="right" id="1126" />
        <Joint to="угла" />
        <Path rotate="left" walls="left_right">
          <Room wall="left" id="1119" />
          <Room wall="right" id="1117" />
        </Path>
        <Path rotate="forward" walls="left">
          <Room id="1115" wall="left" />
          <Room id="1113" wall="left" />
          <Room id="1111" wall="left" />
          <Room id="1114" wall="right" />
          <Room id="1109" wall="left" />
          <Room id="1107" wall="left" />
          <Room id="1112" wall="right" />
          <Room id="1105" wall="left" />
          <Room id="1102" wall="right" />
        </Path>
      </Path>
    </Path>
  </Floor>
</Plan>
`
