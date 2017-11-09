{{- define "name" -}}
{{- printf "%s-%s" .Release.Name .Chart.Name -}}
{{- end -}}
