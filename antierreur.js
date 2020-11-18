
// Erreur courante lorsque vous manipuler quick.db, il est important que lorsque votre bot get la key, de return si il trouve rien
// car autrement il va renvoyer une erreur de code.
let testerreur = DBtesterreur.get(`testerreurdbdata_${message.guild.id}`)
if(testerreur === null) {
  return;
}
if(testerreur === false) {
   return;
}


// Lorsque vous envoyez un dm à une personne, ce catch empeche les erreurs.
Member.send("test").catch(err => message.channel.send(err))


// On l'oublie souvent mais une personne sans pdp créer une erreur de code pouvant arreter votre bot lorsqu'il est hebergé ! Donc avatar est vide si il
// ne trouve rien comme ça pas d'erreur. Dans l'exemple il regarde le bot et non un membre mais c'est un exemple.
let avatar = client.user.avatarURL({ format: 'png', dynamic: true, size: 2048 });
if(!avatar) avatar = ""