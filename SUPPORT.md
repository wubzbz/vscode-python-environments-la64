# Support Guidelines for LoongArch64 Port

> [!NOTE]
> Please check the [Known Issues and Possible Solution](./KNOWN_ISSUE.md) page first!

## 🎯 Where to Report Issues?

**Please report issues in THIS repository when:**
- The issue is related to **LoongArch64 architecture**
- Specific behavior or errors occur only on LoongArch64 platforms
- Build, installation, or packaging problems with this port
- Feature requests specific to LoongArch64

**Please report issues in the [OFFICIAL REPOSITORY](https://github.com/microsoft/vscode-python-environments) when:**
- The issue occurs across all architectures
- Related to core Python environment functionality (not architecture-specific)
- General feature problems that also appear in official versions

## 🔍 Issue Categorization Guide

| Issue Type | Report Location | Reason |
|------------|-----------------|--------|
| **LoongArch64 build failure** | ✅ **THIS REPOSITORY** | Architecture-specific |
| **Runtime crash on LoongArch64** | ✅ **THIS REPOSITORY** | Platform-specific |
| **Environment resolution failure (LA64 only)** | ✅ **THIS REPOSITORY** | Architecture-related network/compatibility |
| **General Python environment issue** | ⚠️ **OFFICIAL REPOSITORY** | Core functionality |
| **VSCode UI related issues** | ⚠️ **OFFICIAL REPOSITORY** | Editor integration |
| **Uncertain about issue origin** | 🔍 **START HERE** | We can help diagnose |

## 📝 When Reporting Issues, Please Provide

**Required Information:**
- Complete error messages and stack traces
- Your LoongArch64 system information (OS, kernel version)
- Python version and architecture being used
- Specific commit hash of this port

**Useful Diagnostic Information:**
```bash
# System information
uname -a
python -c "import sys; print(f'Python {sys.version} on {sys.platform}')"

# Debug information
export DEBUG="*"  # Enable verbose logging
```

## ⚠️ Important Notes

**This is a community-maintained port:**
- This project is NOT officially supported and is maintained by the community
- Response times may not be as prompt as the official version
- Some advanced features may have limitations on LoongArch64

**Issue Triage Process:**
1. First check [existing issues of official repo](https://github.com/microsoft/vscode-python-environments/issues) and [of this repo](https://github.com/wubzbz/vscode-python-environments-la64/issues) for similar problems
2. Provide detailed reproduction steps and environment information
3. If the issue likely belongs upstream, we will assist in reporting it

Moreover, for help and questions about using **the official project**, please see the [python+visual-studio-code labels on Stack Overflow](https://stackoverflow.com/questions/tagged/visual-studio-code+python) or the `#vscode` channel on the [microsoft-python server on Discord](https://aka.ms/python-discord-invite).

## 🔗 Related Links

- [Official VSCode Python Environments Repository](https://github.com/microsoft/vscode-python-environments)
- [Build Guide for LoongArch64](./BUILD_LA64.md)

---

## 💡 Before Reporting

To help us quickly identify the issue:

1. **Test with minimal setup** - Try reproducing with basic configuration
2. **Check debug logs** - Enable debug mode and include relevant log sections
3. **Compare with x86_64** - If possible, test if the same issue occurs on x86_64
4. **Provide reproduction steps** - Clear steps to reproduce the problem

## 🐛 Common LoongArch64-Specific Issues

We're particularly interested in:
- Memory alignment problems
- Endianness-related issues
- Instruction set compatibility
- Library binding problems
- Performance characteristics on LA64

**Thank you for helping improve the LoongArch64 port!** 🚀

