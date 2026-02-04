#!/bin/bash

# Script de setup para Valentine Journey
# Este script automatiza la configuración inicial del proyecto

echo "💕 ============================================="
echo "💕  VALENTINE JOURNEY - Setup Automatizado"
echo "💕 ============================================="
echo ""

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Función para verificar comandos
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo -e "${RED}❌ $1 no está instalado${NC}"
        echo "Por favor instala $1 antes de continuar"
        exit 1
    else
        echo -e "${GREEN}✓ $1 instalado${NC}"
    fi
}

echo "📋 Verificando requisitos previos..."
echo ""

# Verificar Node.js
check_command node
echo "   Node version: $(node --version)"

# Verificar npm
check_command npm
echo "   npm version: $(npm --version)"

# Verificar Git
check_command git
echo "   Git version: $(git --version)"

echo ""
echo -e "${GREEN}✓ Todos los requisitos están instalados${NC}"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Dependencias instaladas correctamente${NC}"
else
    echo -e "${RED}❌ Error instalando dependencias${NC}"
    exit 1
fi

echo ""

# Verificar si existe .env.local
if [ ! -f .env.local ]; then
    echo -e "${YELLOW}⚠ No se encontró archivo .env.local${NC}"
    echo ""
    echo "Necesitas crear un archivo .env.local con tus credenciales de Supabase"
    echo ""
    echo "Copia el archivo .env.example:"
    echo "  cp .env.example .env.local"
    echo ""
    echo "Luego edita .env.local y agrega tus credenciales de Supabase:"
    echo "  REACT_APP_SUPABASE_URL=https://xxxxx.supabase.co"
    echo "  REACT_APP_SUPABASE_ANON_KEY=eyJhbGc..."
    echo ""
    
    read -p "¿Quieres crear el archivo .env.local ahora? (s/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Ss]$ ]]; then
        cp .env.example .env.local
        echo -e "${GREEN}✓ Archivo .env.local creado${NC}"
        echo -e "${YELLOW}⚠ Recuerda editar .env.local con tus credenciales${NC}"
    fi
else
    echo -e "${GREEN}✓ Archivo .env.local encontrado${NC}"
fi

echo ""
echo "🎉 ============================================="
echo "🎉  Setup completado!"
echo "🎉 ============================================="
echo ""
echo "Próximos pasos:"
echo ""
echo "1. Configura Supabase:"
echo "   - Ve a https://supabase.com"
echo "   - Crea un nuevo proyecto"
echo "   - Crea la tabla con el SQL proporcionado en README.md"
echo "   - Copia tus credenciales a .env.local"
echo ""
echo "2. Inicia el servidor de desarrollo:"
echo "   npm start"
echo ""
echo "3. Para desplegar en Vercel:"
echo "   npm i -g vercel"
echo "   vercel --prod"
echo ""
echo "📖 Más información en GUIA-COMPLETA-VERCEL.md"
echo ""
