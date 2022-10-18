import { Button, Cell, Grid, H, Input, Option, Select } from '@balance-pl/lego'
import { Controller, useForm } from 'react-hook-form'
import './styles.scss'

const styles = {
  input: {
    marginTop: '15px',
  },
  h2: {
    marginTop: '25px',
  },
}

export const UserForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      lastName: '',
      firstName: '',
      patronymic: '',
      gender: '',
      birthday: '',
      phone: '',
      email: '',
      adress: '',
      company: '',
    },
  })

  const onSubmit = (data: any) => alert(JSON.stringify(data))

  return (
    <div className="UserForm">
      <H level="2" style={styles.h2}>
        Информация о сотруднике
      </H>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'Поле является обязательным' }}
          render={({ field }) => (
            <Input
              {...field}
              style={styles.input}
              label="Фамилия"
              className={errors?.lastName && 'withError'}
              error={errors?.lastName && errors.lastName.message}
            />
          )}
        />
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'Поле является обязательным' }}
          render={({ field }) => (
            <Input
              {...field}
              style={styles.input}
              label="Имя"
              className={errors?.firstName && 'withError'}
              error={errors?.firstName && errors.firstName.message}
            />
          )}
        />
        <Controller
          name="patronymic"
          control={control}
          render={({ field }) => (
            <Input {...field} style={styles.input} label="Отчество" />
          )}
        />
        <Grid cols={[1, 1]} gap={25}>
          <Cell>
            <Controller
              name="gender"
              control={control}
              render={({ field }) => (
                <Select {...field} style={styles.input} label="Пол">
                  <Option value="0">Мужской</Option>
                  <Option value="1">Женский</Option>
                </Select>
              )}
            />
            <Controller
              name="phone"
              control={control}
              rules={{ required: 'Поле является обязательным' }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={styles.input}
                  label="Мобильный телефон"
                  className={errors?.phone && 'withError'}
                  error={errors?.phone && errors.phone.message}
                  // mask="+7 (999) 999-99-99"
                />
              )}
            />
          </Cell>
          <Cell>
            <Controller
              name="birthday"
              control={control}
              rules={{ required: 'Поле является обязательным' }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={styles.input}
                  label="Дата рождения"
                  className={errors?.birthday && 'withError'}
                  error={errors?.birthday && errors.birthday.message}
                />
              )}
            />
            <Controller
              name="email"
              control={control}
              rules={{
                required: 'Поле является обязательным',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Введен некорректный адрес почты',
                },
              }}
              render={({ field }) => (
                <Input
                  {...field}
                  style={styles.input}
                  label="Email"
                  className={errors?.email && 'withError'}
                  error={errors?.email && errors.email.message}
                />
              )}
            />
          </Cell>
        </Grid>
        <Controller
          name="adress"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              style={styles.input}
              label="Адрес постоянной регистрации"
            />
          )}
        />
        <Controller
          name="company"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              style={styles.input}
              label="Название работодателя"
            />
          )}
        />
        <Grid cols={[1, 1]} gap={25}>
          <Cell cols={[2, 2]}>
            <Button style={styles.input} size="m" block>
              Сохранить
            </Button>
          </Cell>
        </Grid>
      </form>
    </div>
  )
}
