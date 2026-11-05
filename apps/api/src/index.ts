import { ability } from '@saas/auth'

const userCanInviteSomoneElse = ability.can('invite', 'User')
const userCanDeleteOtherUsers = ability.can('delete', 'User')

const userCannotDeleteOtherUsers = ability.cannot('delete', 'User')

console.log(userCanInviteSomoneElse)
console.log(userCanDeleteOtherUsers)
console.log(userCannotDeleteOtherUsers)
