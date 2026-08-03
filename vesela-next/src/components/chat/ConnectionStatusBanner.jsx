"use client";

import { Box, Container, Typography, Button } from "@mui/material";
import { WifiOff, RefreshCw } from "lucide-react";
import { CHAT_CONTAINER_MAX_WIDTH } from "@/constant";

export default function ConnectionStatusBanner({ status, onReconnect }) {
  if (status === "connected") return null;

  const isConnecting = status === "connecting";

  return (
    <Box
      sx={{
        position: "fixed",
        bottom: { xs: 72, sm: 92 },
        left: 0,
        right: 0,
        zIndex: 1100,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CHAT_CONTAINER_MAX_WIDTH, width: "100%" }}>
        <Box
          sx={{
            p: 1.2,
            borderRadius: 2,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 1.5,
            border: "1px solid",
            borderColor: "warning.light",
            bgcolor: (t) => t.palette.mode === "dark" ? "rgba(43, 33, 24, 0.85)" : "rgba(255, 248, 230, 0.85)",
            backdropFilter: "blur(12px)",
            boxShadow: 3,
            transition: "all 0.3s ease",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isConnecting ? (
              <Box
                sx={{
                  display: "inline-flex",
                  animation: "spin 2s linear infinite",
                  "@keyframes spin": {
                    "0%": { transform: "rotate(0deg)" },
                    "100%": { transform: "rotate(360deg)" },
                  },
                }}
              >
                <RefreshCw size={16} style={{ color: "#d97706" }} />
              </Box>
            ) : (
              <WifiOff size={16} style={{ color: "#dc2626" }} />
            )}

            <Typography
              variant="caption"
              color="text.secondary"
              sx={{ fontWeight: 500 }}
            >
              {isConnecting
                ? "Connecting to chat assistant..."
                : "Connection lost. Reconnecting automatically..."}
            </Typography>
          </Box>

          {!isConnecting && (
            <Button
              size="small"
              variant="text"
              onClick={onReconnect}
              sx={{
                py: 0.2,
                px: 1,
                minWidth: "auto",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "none",
                color: "amber.700",
                bgcolor: (t) => t.palette.mode === "dark" ? "rgba(217, 119, 6, 0.15)" : "rgba(217, 119, 6, 0.1)",
                "&:hover": {
                  bgcolor: (t) => t.palette.mode === "dark" ? "rgba(217, 119, 6, 0.25)" : "rgba(217, 119, 6, 0.2)",
                },
              }}
            >
              Reconnect Now
            </Button>
          )}
        </Box>
      </Container>
    </Box>
  );
}
