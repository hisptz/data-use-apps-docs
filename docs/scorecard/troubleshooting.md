---
label: Troubleshooting
sidebar_position: 10
---

# Troubleshooting

Common issues and solutions when using the Scorecard App:

---

## Scorecard Not Loading
- **Cause**: Cached files conflict after an update.
- **Fix**: Clear browser cache and refresh DHIS2.

---

## Scorecard Not Found
- **Cause**: Invalid scorecard ID entered in the browser URL.
- **Fix**: Open the scorecard directly from the Scorecard App menu.

---

## Access Denied
- **Cause**: User lacks appropriate permissions.
- **Fix**: Update user roles and sharing settings in DHIS2.

---

## Data Missing
- **Cause**: Filters applied incorrectly, or indicator metadata is incomplete.
- **Fix**: Reset filters, verify indicator configuration in Indicator Maintenance App.

---

## Slow Performance
- **Cause**: Too many organisation units or indicators selected at once.
- **Fix**: Reduce selection size or break down scorecards into smaller sets.

---

## General Errors
- **Cause**: Network issues or technical glitches.
- **Fix**:
  - Refresh app or browser (CTRL + R).
  - Check system logs using “View Logs”.
  - If persistent, report to DHIS2 administrator.

## Error Management
- **Access denied error**:
  - Occurs when a user lacks permission.
  - Fix by updating sharing settings.
- **Scorecard not found**:
  - Happens when a wrong ID is used in the URL.
  - Verify by selecting the scorecard directly from the app menu.
- **General errors**:
  - Often caused by network issues.
  - Refresh the page or clear the browser cache.