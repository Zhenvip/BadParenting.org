import os
import subprocess

# 配置部分
repository_url = "https://github.com/Zhenvip/BadParenting.org.git"  # 远程仓库URL
commit_message = "Initial commit"  # 提交信息

def run_command(command):
    """运行系统命令，并返回输出"""
    try:
        output = subprocess.check_output(command, stderr=subprocess.STDOUT, shell=True)
        print(output.decode('utf-8'))
    except subprocess.CalledProcessError as e:
        print("Error occurred while executing command:")
        print(e.output.decode('utf-8'))
        exit(1)

def main():
    # 检查当前目录是否已经初始化为Git仓库
    if not os.path.exists(".git"):
        print("Initializing a new Git repository.")
        run_command("git init")

    # 添加远程仓库
    run_command(f"git remote add origin {repository_url}")

    # 添加所有文件到暂存区
    print("Adding all files to the staging area.")
    run_command("git add .")

    # 提交文件
    print(f"Committing changes with message: '{commit_message}'")
    run_command(f"git commit -m \"{commit_message}\"")

    # 推送到远程仓库
    print("Pushing to the remote repository.")
    run_command("git push -u origin master")

if __name__ == "__main__":
    main()
