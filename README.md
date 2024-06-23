# do-not-open-preview-editor-with-single-click

<img src="./assets/image-01.webp" width=300>

`Please, don't open the CODE PREVIEW EDITOR with a single click!`

## How to Install?

1. Visit [Microsoft VS Marketplace](https://marketplace.visualstudio.com/items?itemName=dc5v.do-not-open-preview-editor-with-single-click)

2. Or launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

   `ext install dc5v.do-not-open-preview-editor-with-single-click`

## What is this extension?

This extension is available for use in Visual Studio Code (VS Code).

It allows you to open files in the VS Code explorer panel with a double-click instead of a single click.

A word of caution... The VS Code distribution doesn't offer a direct API for the explorer, so we've had to include some code that forcefully changes the settings to maintain functionality.

Refer to the code below for the list of settings that are forcefully changed:

```yaml
vscode.ConfigurationTarget.Global
  - enablePreview: false
  - enablePreviewFromQuickOpen: false
  - configExplorer.openMode: 'doubleClick'
```

## Complaints

### 1st

When I have a lot of files, and their names are similar, or when I'm working with multiple files to write code, I've always been frustrated.

I used to think, 
"Why does a single (accidental or intentional) click in the explorer show the code preview? Why isn't there a perfect option to disable this?"

### 2nd

I have a bit of ADHD and take prescription Methylphenidate. Maybe that's why? When many code editors flash and stir up the screen, my attention drops significantly, or I get distracted by code that doesn't need careful attention. (Zen mode isn't fun for me)

So, to resolve these frustrations, I created this extension.

Fellow ADHD comrades, if this helps even a little, hang in there and let's keep earning that rent money. 🍻

> 

## Donation

| Donation <img src="./assets/btc.png" width="12" valign="middle"> |
|:--------:|
| <img src="./assets/donation.png" width="200">                                 |
| bitcoin:bc1qajnz6m58vuqamv9lax96qvakfytjq86fs7esxc                          |
| <small>If you enjoyed using it, consider throwing a donation my way!<small> |

---

# do-not-open-preview-editor-with-single-click (ko-kr)

<img src="./assets/image-01.webp" width=300>

`제발 클릭 한 번으로 CODE PREVIEW EDITOR 를 열지말아줘!`


## How to Install?

1. Visit [Microsoft VS Marketplace](https://marketplace.visualstudio.com/items?itemName=dc5v.do-not-open-preview-editor-with-single-click)

2. Or launch VS Code Quick Open (Ctrl+P), paste the following command, and press enter.

   `ext install dc5v.do-not-open-preview-editor-with-single-click`

## 이 extenstion은 무엇인가?

이 extension은 Visual Studio Code(vscoe)에서 사용할 수 있습니다.

vscode의 좌측 explore의 파일목록을 더블클릭해 데이터를 열도록 하는 기능 제공합니다.

주의할 점은... vscode 배포판은 explorer에 대한 직접적인 API를 제공하지 않아 설정을 강제적으로 변경해 기능을 유지하도록 하는 코드가 담겨있습니다.

강제적으로 변경되는 설정의 목록은 아래 코드를 참조하십시오.


```yaml
vscode.ConfigurationTarget.Global
  - enablePreview: false
  - enablePreviewFromQuickOpen: false
  - configExplorer.openMode: 'doubleClick'
```

## 불만 1 
파일이 많고 파일명이 비슷하거나 여러 파일을 사용해 코드를 작성할때, 나는 언제나 불만이었다.

그리고 이렇게 생각했다.
"왜 explore에서 한 번의 (실수 또는 고의로) 클릭으로 파일의 code preview 를 보여주는 것인가? 왜 이것을 disabled 할 수 있는 완벽한 옵션을 제공하지 않는것인가?"



## 불만 2
나는 약간의 주의력결핍장애(ADHD)를 가지고 있으며 처방전에 의한 각성제를 처방받고 있다. 그래서일까? 많은 코드 에디터가 번쩍이며 화면을 휘저어 혼란스럽게 만들경우, 주의력이 비약적으로 떨어지거나, 또는 주의깊게 보지 않아도 되는 코드에 눈길을 가지게 된다. (zen mode는 즐겁지 않아)


그래서 이런 불만은 해결하기 위해 이 extension을 만들었다.

ADHD 동지들이여. 조금이라도 도움이 된다면, 조금 만 더 힘을 내어 렌탈비를 벌어요.
