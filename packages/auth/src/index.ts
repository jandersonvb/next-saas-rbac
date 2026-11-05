import {
  AbilityBuilder,
  type CreateAbility,
  createMongoAbility,
  type ForcedSubject,
  type MongoAbility,
} from '@casl/ability'

const actions = ['manage', 'invite', 'delete'] as const // Acoes possiveis para o usuario
const subjects = ['User', 'all'] as const // Sujetos possiveis para o usuario (User, all)

type AppAbilities = [
  (typeof actions)[number],
  (
    | (typeof subjects)[number]
    | ForcedSubject<Exclude<(typeof subjects)[number], 'all'>>
  ),
]

export type AppAbility = MongoAbility<AppAbilities>
export const createAppAbility = createMongoAbility as CreateAbility<AppAbility>

const { build, can, cannot } = new AbilityBuilder(createAppAbility)

can('invite', 'User') // O usuario pode invitar outros usuarios
cannot('delete', 'User') // O usuario nao pode deletar outros usuarios

export const ability = build() // Cria a habilidade do usuario
