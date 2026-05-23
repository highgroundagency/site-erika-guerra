#!/usr/bin/env bash
# ============================================================
# Script de setup das fotos da Dra. Érika Guerra
#
# Como usar:
#   1. Coloque as fotos na mesma pasta deste script
#   2. Execute: bash scripts/add-photos.sh
# ============================================================

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PUBLIC_PHOTOS="$PROJECT_ROOT/public/photos"

mkdir -p "$PUBLIC_PHOTOS"

echo "📸 Verificando fotos..."
echo ""

check_photo() {
  local file="$1"
  local desc="$2"
  local required="$3"

  if [ -f "$SCRIPT_DIR/$file" ]; then
    cp "$SCRIPT_DIR/$file" "$PUBLIC_PHOTOS/$file"
    echo "✅ $file — $desc"
  elif [ -f "$PUBLIC_PHOTOS/$file" ]; then
    echo "✅ $file — já existe em public/photos/"
  else
    if [ "$required" = "true" ]; then
      echo "❌ $file — OBRIGATÓRIO — $desc"
    else
      echo "⚠️  $file — opcional — $desc"
    fi
  fi
}

check_photo "dra-erika-hero.jpg"    "foto principal do hero (sorrindo, mão no queixo)" "true"
check_photo "dra-erika-clinica.jpg" "foto do consultório (seção autoridade)"            "false"
check_photo "vsl-poster.jpg"        "poster do vídeo VSL (coloque quando tiver)"        "false"

echo ""
echo "📁 Pasta destino: $PUBLIC_PHOTOS"
echo ""
echo "Depois de adicionar as fotos, rode:"
echo "  npm run dev    → para ver o site"
echo "  npm run build  → para gerar o build de produção"
