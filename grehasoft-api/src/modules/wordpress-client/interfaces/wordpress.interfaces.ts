export interface EndpointDiagnosticResult {
  endpoint: string;
  url: string;
  httpStatus: number | null;
  durationMs: number;
  success: boolean;
  itemCount: number | null;
  dataType: string;
  errorMessage: string | null;
  diagnosis: string;
}

export interface WordPressDiagnosticSummary {
  timestamp: string;
  wordpressBaseUrl: string;
  totalEndpointsTested: number;
  successfulEndpoints: number;
  failedEndpoints: number;
  overallStatus: 'HEALTHY' | 'DEGRADED' | 'UNREACHABLE';
  results: EndpointDiagnosticResult[];
}
