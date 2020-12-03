#!/bin/bash

ESC_SEQ="\x1b["
COL_RESET=${ESC_SEQ}"39;49;00m"
COL_BLUE=${ESC_SEQ}"34;01m"
COL_GREEN=${ESC_SEQ}"32;01m"
COL_CYAN=${ESC_SEQ}"36;01m"

ITERATIONS=${1:-5}

echo ""
for i in `seq 1 "$ITERATIONS"`; do
  printf "${COL_CYAN}==> Running Stress Test: Iteration ${i} of ${ITERATIONS}...${COL_RESET}\n"
  mocha test --reporter dot
done
