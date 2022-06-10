import {
  Button,
  Cell,
  Grid,
  H,
  Input,
  InputDate,
  Option,
  Select,
} from '@balance-pl/lego'

const styles = {
  input: {
    marginBottom: '15px',
  },
  h2: {
    marginTop: '25px',
  },
}

export const UserForm = () => {
  return (
    <div className="UserForm">
      <H level="2" style={styles.h2}>
        Информация о сотруднике
      </H>
      <form>
        <Input style={styles.input} label="Фамилия" />
        <Input style={styles.input} label="Имя" />
        <Input style={styles.input} label="Отчество" />
        <Grid cols={[1, 1]} gap={25}>
          <Cell>
            <Select style={styles.input} label="Пол">
              <Option value="0">Мужской</Option>
              <Option value="1">Женский</Option>
            </Select>
            <Input
              style={styles.input}
              label="Мобильный телефон"
              mask="+7 (999) 999-99-99"
            />
          </Cell>
          <Cell>
            <InputDate label="Дата рождения" />
            <Input style={styles.input} label="Email" />
          </Cell>
        </Grid>
        <Input style={styles.input} label="Адрес постоянной регистрации" />
        <Input style={styles.input} label="Название работодателя" />
        <Grid cols={[1, 1]} gap={25}>
          <Cell cols={[2, 2]}>
            <Button size="m" block>
              Сохранить
            </Button>
          </Cell>
        </Grid>
      </form>
    </div>
  )
}
