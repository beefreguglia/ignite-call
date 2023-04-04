import { Button, Text, TextArea, TextInput } from '@ignite-ui/react'
import { CalendarBlank, Clock } from 'phosphor-react'
import { ConfirmForm, ConfirmFormActions, ConfirmFormHeader } from './styles'

export function ConfirmStep() {
  function handleConfirmScheduling() {}
  return (
    <ConfirmForm as="form">
      <ConfirmFormHeader>
        <Text>
          <CalendarBlank />
          22 de setembro de 2022
        </Text>
        <Text>
          <Clock />
          18:00h
        </Text>
      </ConfirmFormHeader>
      <label>
        <Text size="sm">Nome Completo</Text>
        <TextInput placeholder="Seu nome" />
      </label>
      <label>
        <Text size="sm">Endereço de e-mail</Text>
        <TextInput type="email" placeholder="johndoe@example.com" />
      </label>
      <label>
        <Text size="sm">Observações</Text>
        <TextArea />
      </label>
      <ConfirmFormActions>
        <Button type="button" variant="tertiary">
          Cancelar
        </Button>
        <Button type="submit">Confirmar</Button>
      </ConfirmFormActions>
    </ConfirmForm>
  )
}
