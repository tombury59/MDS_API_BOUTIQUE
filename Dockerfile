FROM node:18

# Définir le répertoire de travail
WORKDIR /root/MDS_API_BOUTIQUE

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier le reste du code
COPY . .

# Exposer le port de l'application
EXPOSE 3001

# Lancer l'application
CMD ["node", "index.js"]
